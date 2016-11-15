import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class SockDisplay extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }
    componentDidMount() {
        attachSharedState(this)
    }
    componentWillUnmount() {
        detachSharedState(this)
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
                    <div className="panel panel-default">
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
    </main>


    // Begin modal for all pictures
    // <div class="modal fade" id="sockModal" tabindex="-1" role="dialog">
    //   <div class="modal-dialog" role="document">
    //     <div class="modal-content container-fluid">
    //       <div class="modal-header row">
    //         <p class="caption lead col-xs-6"></p>
    //         <a class="close col-xs-6 text-right" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></a>
    //       </div>
    //       <div class="modal-body">
    //           <img src="" class="imagePreview" width=100% />
    //       </div>
    //       <div class="modal-footer"></div>
    //     </div>
    //   </div>
    // </div>
    // End modal for all pictures
    }
}

export default SockDisplay
