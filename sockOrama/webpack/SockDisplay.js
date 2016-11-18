import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class SockDisplay extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = {
            sharedState: sharedState(),
            modalIsOpen: false,
            quantity: 1,
            sizeSelection: '0',
            socks: [],
            modalSocks: [],
            modalTitle: '',
            modalDescription: '',
            modalQuantity: 1,
            modalColor: '',
            modalStyle: '',
            modalMaterial: '',
            modalPrice: '',
            modalImage: '',
            modalSizes: [],
        }
    }
    componentDidMount() {
      attachSharedState(this, (updatedSharedState) => {
        this.setState({sharedState: updatedSharedState})

        if (updatedSharedState.updateSearchResults) {
          var searchTerm = 'search=' + updatedSharedState.updateSearchResults
        } else {
          var searchTerm = ''
        }
          fetch('/socks/filter?' + searchTerm)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    socks: response.socks
                })
            })

      })

      sharedState({
          cartQuantity: 0
      })
      fetch('/socks')
      .then(response => response.json())
      .then((response) => {
        sharedState({
          socks: response.socks
        })
        document.querySelector('.item').classList.add('active')
        document.querySelector('.carousel-indicators > li').classList.add('active')
        document.querySelector('input[name="priceRadios"]:first-child').checked = true
  })
    }

    componentWillUnmount() {
      detachSharedState(this)
    }

    openModal(sock) {
        this.setState({
            modalIsOpen: true
        })
        document.querySelector('.carousel-indicators').classList.add('hidden')
        fetch('/socks/filter?filter[name_cont]=' + sock)
        .then(response => response.json())
        .then((response) => {
          this.setState({
            modalSocks: response.socks,
            modalTitle: response.socks[0].name,
            modalDescription: response.socks[0].description,
            modalColor: response.socks[0].color.name,
            modalStyle: response.socks[0].style.name,
            modalMaterial: response.socks[0].category.name,
            modalPrice: (response.socks[0].price / 100).toFixed(2),
            modalImage: response.socks[0].image,
            modalSizes: response.socks[0].sizes
          })
        })
    }

    closeModal() {
        this.setState({
            modalIsOpen:false
        })
        document.querySelector('.carousel-indicators').classList.remove('hidden')
    }

    handleFilterChange(e) {
      var price = document.querySelector('input[name="priceRadios"]:checked')
      var size = []
      var color = []
      var material = []
      var style = []
      if (e.target.name === 'priceRadios') {
        price.checked = false
        e.target.checked = true
      } else if (e.target.name === 'sizeCheckbox') {
        document.querySelectorAll('input[name="sizeCheckbox"]:checked').forEach(function(check) {
          size.push(check.value)
        })
      } else if (e.target.name === 'colorCheckbox') {
        document.querySelectorAll('input[name="colorCheckbox"]:checked').forEach(function(check) {
          color.push(check.value)
        })

        if (color.length > 0) {
          this.state.colorFilter += color.join(',')
        }
      } else if (e.target.name == 'materialCheckbox') {
        document.querySelectorAll('input[name="materialCheckbox"]:checked').forEach(function(check) {
          material.push(check.value)
        })

        if (material.length > 0) {
          this.state.materialFilter += material.join(',')
        }
      } else if (e.target.name === 'styleCheckbox') {
        document.querySelectorAll('input[name="styleCheckbox"]:checked').forEach(function(check) {
          style.push(check.value)
        })
      }

      // start function to contatenate and send fetch call with filter values
      var sizeFilter = size.join('&filter[sizes_abbr_cont]=')
      var colorFilter = color.join('&filter[color_name_cont]=')
      var materialFilter = material.join('&filter[category_name_cont]=')
      var styleFilter = style.join('&filter[style_name_cont]=')

      fetch('/socks/filter?filter[color_name_cont]=' + colorFilter + '&filter[style_name_cont]=' + styleFilter + '&filter[category_name_cont]=' + materialFilter + '&filter[sizes_abbr_cont]=' + sizeFilter)
      .then(response => response.json())
      .then(response => {
          this.setState({
            socks: response.socks
          })
      })
    }

    handleSizeChange(e) {
      this.setState({
        sizeSelection: e.target.value
      })
      this.state.modalSizes.forEach((size) => {
        if (e.target.value == size.id) {
          this.setState({
            modalQuantity: size.in_stock
          })
        }
      })
    }

    handleQuantityChange(e) {
      this.setState({
        quantity: e.target.value
      })
    }

    addToCart() {
      if (sessionStorage.getItem('cart_token') != null) {
        var cartToken = '&token=' + sessionStorage.getItem('cart_token')
      } else {
        var cartToken = ''
      }
      if (this.state.sizeSelection == 0) {
        alert('Please select a size')
      } else {
        var cartQuantity = this.state.cartQuantity += 1
        fetch('/add_to_cart?size_id=' + this.state.sizeSelection + '&num_ordered=' + this.state.quantity + cartToken, {
          method: 'POST'
        })
        .then(response => response.json())
        .then(response => {
          sessionStorage.setItem('cart_token', response.cart.token)
        })
        sharedState({
          cartQuantity: cartQuantity
        })
      }
      this.closeModal()
    }

    render() {
      var socksArray = []
      var socksId = []
      var socks = this.state.socks.map((sock, i) => {
        if (sock.featured === false && socksId.indexOf(sock.name) === -1) {
          socksId.push(sock.name)
          socksArray.push(sock)
        }
      })
      var displaySocks = socksArray.map((sock, i) => {
        return  <div className="col-xs-12 col-sm-4" key={i}>
          <div className="panel panel-default" onClick={() => this.openModal(sock.name)}>
            <div className="panel-body sock-panel">
              <div className="row flex">
                <img className="sock_image" src={sock.image} />
              </div>
              <div className="row">
                <div className="col-xs-8">
                  <p>{sock.name}</p>
                </div>
                <div className="col-xs-4 text-right">
                  <p>${(sock.price / 100).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      })

      var featuredSocks = this.state.socks.map((sock, i) => {
        if (sock.featured === true) {
          return <div className="item" key={i}>
            <img src="http://unsplash.it/1000/250?random" width="100%" alt="{sock.name}"/>
            <div className="carousel-caption">
              <h4>{sock.name}</h4>
            </div>
          </div>
        } else {
          return <div className="item" key={i}>
            <img src="http://robohash.org/socks" alt="random robohash" />
            <div className="carousel-caption">
              <h4>... No featured socks, just Robohash ...</h4>
            </div>
          </div>
        }
      })
      var featuredSocksIndicators = this.state.socks.map((sock, i) => {
        if (sock.featured === true) {
          return <li data-target="#featuredSocks" data-slide-to="{i}" key={i}></li>
        } else {
          return <li data-target="#featuredSocks" data-slide-to="{i}" key={i}></li>
        }
      })

      var modalSizes = this.state.modalSizes.map((size, i) => {
        return <option value={size.id} key={i}>{size.abbr}</option>
      })

        return <main className="container-fluid">
          {/* Start Featured Socks  */}
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="text-center">Featured Socks!</h1>
                  <div id="featuredSocks" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                      {featuredSocksIndicators}
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner" role="listbox">
                      {featuredSocks}
                    </div>
                    {/* Controls */}
                    <a className="left carousel-control" href="#featuredSocks" role="button" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#featuredSocks" role="button" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            {/* End Featured Socs */}
            <br />
            <div className="row">
            {/* Start Filter Panel */}
              <section className="col-xs-5 col-sm-2 panel panel-default">
                <div className="panel-body">
                  <ul className="list-unstyled">
                    <h4>Price</h4>
                    <div className="radio">
                      <label>
                        <input type="radio" name="priceRadios" id="priceRadiosAnyPrice" value="anyPrice" onChange={this.handleFilterChange}/>
                        Any Price
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="priceRadios" id="priceRadiosUnder20" value="under20" onChange={this.handleFilterChange}/>
                        Under $20
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="priceRadios" id="priceRadios20To30" value="20To30" onChange={this.handleFilterChange}/>
                        $20 to $30
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="priceRadios" id="priceRadios30To40" value="30To40" onChange={this.handleFilterChange}/>
                        $30 to $40
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="priceRadios" id="priceRadiosOver40" value="over40" onChange={this.handleFilterChange}/>
                        Over $40
                      </label>
                    </div>
                  </ul>
                  <hr />
                  <ul className="list-unstyled">
                    <h4>Size</h4>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value="s" name="sizeCheckbox" onChange={this.handleFilterChange} />
                        S
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value="m" name="sizeCheckbox" onChange={this.handleFilterChange} />
                        M
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value="l" name="sizeCheckbox" onChange={this.handleFilterChange} />
                        L
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value="xl" name="sizeCheckbox" onChange={this.handleFilterChange} />
                        XL
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value="xxl" name="sizeCheckbox" onChange={this.handleFilterChange} />
                        XXL
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value="xxxl" name="sizeCheckbox" onChange={this.handleFilterChange} />
                        XXXL
                      </label>
                    </div>
                  </ul>
                  <hr />
                  <ul className="list-unstyled">
                    <h4>Color</h4>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="colorCheckbox" value="grey" onChange={this.handleFilterChange} />
                        Grey
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="colorCheckbox" value="cream" onChange={this.handleFilterChange} />
                        Cream
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="colorCheckbox" value="brown" onChange={this.handleFilterChange} />
                        Brown
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="colorCheckbox" value="black" onChange={this.handleFilterChange} />
                        Black
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="colorCheckbox" value="charcoal" onChange={this.handleFilterChange} />
                        Charcoal
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="colorCheckbox" value="various" onChange={this.handleFilterChange} />
                        Various
                      </label>
                    </div>
                  </ul>
                  <hr />
                  <ul className="list-unstyled">
                    <h4>Material</h4>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="materialCheckbox" value="blended" onChange={this.handleFilterChange} />
                        Blended
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="materialCheckbox" value="llama" onChange={this.handleFilterChange} />
                        Llama
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="materialCheckbox" value="alpaca" onChange={this.handleFilterChange} />
                        Alpaca
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="materialCheckbox" value="wool" onChange={this.handleFilterChange} />
                        Wool
                      </label>
                    </div>
                  </ul>
                  <hr />
                  <ul className="list-unstyled">
                    <h4>Style</h4>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="styleCheckbox" value="crew" onChange={this.handleFilterChange} />
                        Crew
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="styleCheckbox" value="dress" onChange={this.handleFilterChange} />
                        Dress
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="styleCheckbox" value="knee" onChange={this.handleFilterChange} />
                        Knee
                      </label>
                    </div>
                  </ul>
                </div>
              </section>
              {/* End Filter Panel */}
              {/* Start Grid Display */}
              <section>
                <div className="col-xs-7 col-sm-10">
                  {displaySocks}
                </div>
              </section>
              {/* End Grid Display */}
            </div>

          {/* Begin modal */}
          <div className="container">
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Sock Modal"
              >
                <div className="row modal_row">
                  <div className="col-xs-10">
                    <h2>{this.state.modalTitle} <span className="lead small">${this.state.modalPrice} each</span></h2>
                    <p className="lead small">{this.state.modalDescription}</p>
                  </div>
                  <div className="col-xs-2 text-right">
                    <button className="btn btn-default" onClick={this.closeModal}>X</button>
                  </div>
                </div>
            <div className="row">
            <div className="col-sm-6 flex">
              <img className="sock_image_modal" src={this.state.modalImage} width="100%"/>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="size">Size</label>
                <select id="size" name="size" value={this.state.sizeSelection} className="form-control" onChange={this.handleSizeChange}>
                  <option disabled value="0">-- Select a size --</option>
                  {modalSizes}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input className="form-control" type="number" name="quantity" id="quantity" step="1" min="1" value={this.state.quantity} max={this.state.modalQuantity} pattern="[0-9]*" inputMode="numeric" onChange={this.handleQuantityChange}/>
                <p className="lead small text-right">Max Quantity: {this.state.modalQuantity}</p>
              </div>
              <div>
                <p>Color: {this.state.modalColor}</p>
                <p>Style: {this.state.modalStyle}</p>
                <p>Material: {this.state.modalMaterial}</p>
              </div>
            </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                  <button type="button" className="btn btn-success btn-block" onClick={this.addToCart}>Add to cart</button>
              </div>
            </div>
          </Modal>
        </div>

    </main>

    }
}

export default SockDisplay
