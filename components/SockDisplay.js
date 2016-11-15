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
            quantity: 10,
        }
    }
    openModal() {
        this.setState({
            modalIsOpen: true
        })
    }
    afterOpenModal() {
        this.refs.subtitle.style.color='#f00'
    }
    closeModal() {
        this.setState({
            modalIsOpen:false
        })
    }

    render() {
        return <main className="container">
            <div className="row">
            <h1>Sock Display</h1>
            <section className="col-xs-4 col-sm-3 well">
                <h4>Price</h4>
                <div className="radio">
                  <label>
                    <input type="radio" name="priceRadios" id="priceRadiosUnder20" value="under20" />
                    Under $20
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="priceRadios" id="priceRadios20To30" value="20To30" />
                    $20 to $30
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="priceRadios" id="priceRadios30To40" value="30To40" />
                    $30 to $40
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="priceRadios" id="priceRadiosOver40" value="over40" />
                    Over $40
                  </label>
                </div>
                <hr />
                <h4>Size</h4>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="s" />
                        S
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="m" />
                        M
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="l" />
                        L
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="xl" />
                        XL
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="xxl" />
                        XXL
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="xxxl" />
                        XXXL
                    </label>
                </div>
                <hr />
                <h4>Color</h4>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="grey" />
                        Grey
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="cream" />
                        Cream
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="brown" />
                        Brown
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="black" />
                        Black
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="charcoal" />
                        Charcoal
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="various" />
                        Various
                    </label>
                </div>
                <hr />
                <h4>Material</h4>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="blended" />
                        Blended
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="llama" />
                        Llama
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="alpaca" />
                        Alpaca
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="wool" />
                        Wool
                    </label>
                </div>
                <hr />
                <h4>Style</h4>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="crew" />
                        Crew
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="dress" />
                        Dress
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="knee" />
                        Knee
                    </label>
                </div>
            </section>
            <div className="col-xs-8 col-sm-9">
                <div className="col-xs-6 col-sm-4">
                    <div className="panel panel-default" onClick={this.openModal}>
                        <div className="panel-body">
                            <div className="row">
                                <img src="http://unsplash.it/300?random" width="100%"/>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <p>Name of Sock</p>
                                </div>
                                <div className="col-sm-4 text-right">
                                    <p>$20.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Begin modal */}
        <div className="container">
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Sock Modal"
          >
            <div className="row">
              <div className="col-xs-10">
                <h2 ref="subtitle">Name of Sock</h2>
              </div>
              <div className="col-xs-2 text-right">
                <button className="btn btn-default" onClick={this.closeModal}>X</button>
              </div>
            </div>
            <div className="row">
            <div className="col-sm-6 text-center">
              <img src="http://unsplash.it/300?random"/>
            </div>
            <div className="col-sm-6">
            <form>
              <div className="form-group">
                <label htmlFor="size">Size</label>
                <select id="size" name="size" className="form-control">
                  <option disabled selected> -- Select a size -- </option>
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
                <select id="quantity" name="quantity" className="form-control">
                  <option disabled selected> -- Select a quantity -- </option>
                  <option value="1">1</option>
                </select>
              </div>

              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
            </div>
            </div>
          </Modal>
        </div>
        {/* End modal */}

    </main>

    }
}

export default SockDisplay
