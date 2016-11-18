import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
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
            modalIsOpen: false,
            quantity: 1,
            maxQuantity: 10,
            sizeSelection: '0',
            socks: []
        }
    }
    componentDidMount() {
      fetch('/socks')
      .then(response => response.json())
      .then((response) => {
        console.log(response.socks)
        this.setState({
          socks: response.socks
        })
        document.querySelector('.item').classList.add('active')
        document.querySelector('.carousel-indicators > li').classList.add('active')
        document.querySelector('input[name="priceRadios"]:first-child').checked = true
      })
    }
    openModal() {
        this.setState({
            modalIsOpen: true
        })
        document.querySelector('.carousel-indicators').classList.add('hidden')
    }
    afterOpenModal() {

    }
    closeModal() {
        this.setState({
            modalIsOpen:false
        })
        document.querySelector('.carousel-indicators').classList.remove('hidden')
    }
    handleFilterChange(e) {
      // TODO: add fetch call with values
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
        if (style.length > 0) {
          this.state.styleFilter += style.join(',')
        }
      }

      // start function to contatenate and send fetch call with filter values
      var sizeFilter = size.join(',')
      var colorFilter = color.join(',')
      var materialFilter = material.join(',')
      var styleFilter = style.join(',')
      console.log('price: ' + price.value + ' size: ' + sizeFilter + ' color: ' + colorFilter + ' material: ' + materialFilter + ' style: ' + styleFilter)
    }
    handleSizeChange(e) {
      this.setState({
        sizeSelection: e.target.value
      })
    }
    handleQuantityChange(e) {
      this.setState({
        quantity: e.target.value
      })
      console.log(this.state.quantity)
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
          <div className="panel panel-default" onClick={this.openModal}>
            <div className="panel-body sock-panel">
              <div className="row">
                <img src="http://unsplash.it/300?random" width="100%"/>
              </div>
              <div className="row">
                <div className="col-xs-7">
                  <p>{sock.name}</p>
                </div>
                <div className="col-xs-5 text-right">
                  <p>{sock.price}</p>
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
                        {/* TODO: add checked and onChange event */}
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
                <div className="row">
                  <div className="col-xs-10">
                    <h2 ref="subtitle">Argyle</h2>
                    <p className="lead small">Description (if one exists)</p>
                  </div>
                  <div className="col-xs-2 text-right">
                    <button className="btn btn-default" onClick={this.closeModal}>X</button>
                  </div>
                </div>
            <div className="row">
            <div className="col-sm-6 text-center">
              <img src="http://ecx.images-amazon.com/images/I/611Ov2M4vHL._AC_UL400_SR320,400_.jpg" width="100%"/>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="size">Size</label>
                <select id="size" name="size" value={this.state.sizeSelection} className="form-control" onChange={this.handleSizeChange}>
                  <option disabled value="0">-- Select a size --</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XXXL">XXXL</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input className="form-control" type="number" name="quantity" id="quantity" step="1" min="1" value={this.state.quantity} max={this.state.maxQuantity} pattern="[0-9]*" inputMode="numeric" onChange={this.handleQuantityChange}/>
              </div>
              <div>
                <p>Color: Various</p>
                <p>Style: Dress</p>
                <p>Material: Blended</p>
              </div>
            </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                  <button type="button" className="btn btn-success btn-block">Add to cart</button>
              </div>
            </div>
          </Modal>
        </div>

    </main>

    }
}

export default SockDisplay
