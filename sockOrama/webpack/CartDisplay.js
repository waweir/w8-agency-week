import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class CartDisplay extends React.Component {
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
        return <div className="container">
            {/* whoever works on this can decide if the cart display and billing and shipping panel need to be 2 separate components that are displayed through this render function, or if they are just defined here */}
            <div className="row">
                <h1>Checkout</h1>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <h2>1. Billing Address</h2>
                    <div className="form-group well billingAddress">
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="billingFirstName">First Name</label>
                                <input className="form-control" type="text" name="billingFirstName" placeholder="Jon" required />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="billingLastName">Last Name</label>
                                <input className="form-control" type="text" name="billingLastName" placeholder="Snow" required/>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-sm-6">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" type="email" name="email" placeholder="Winter@is.coming" required/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="billingTelephone">Telephone</label>
                                <input className="form-control" type="tel" name="billingTelephone" placeholder="0118 999 88199 9119 725 3" required/>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-sm-12">

                                <label htmlFor="billingAddress">Billing Address</label>
                                <input className="form-control" type="text" name="billingAddress" placeholder="123 42nd AVE NE" required/>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-sm-12">

                                <input className="form-control" type="text" name="billingAddressAdditional" placeholder="Apartment/Suite/Other" />
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-sm-12">

                                <label htmlFor="billingCity">City</label>
                                <input className="form-control" type="text" name="billingCity" placeholder="Winterhold" required/>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-sm-6">
                                <label htmlFor="billingState">State</label>
                                <select className="form-control" defaultValue="default">
                                    <option disabled value="default">-Select State-</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="zipcode">Zipcode</label>
                                <input className="form-control" type="text" name="zipcode" placeholder="46202" required/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="" htmlFor="shipToBillingAddress">
                            <input type="checkbox" id="shipToBillingAddress"  defaultChecked="true"/> Ship to billing address?
                        </label>
                    </div>
                    <div className="hidden">
                        <h2>Shipping Address</h2>
                        <div className="form-group well billingAddress">
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="shippingFirstName">First Name</label>
                                    <input className="form-control" type="text" name="shippingFirstName" placeholder="Jon" required/>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="shippingLastName">Last Name</label>
                                    <input className="form-control" type="text" name="shippingLastName" placeholder="Snow" required/>
                                </div>
                            </div>
                            <div className="row">
                                <br />
                                <div className="col-sm-12">
                                    <label htmlFor="shippingTelephone">Telephone</label>
                                    <input className="form-control" type="tel" name="shippingTelephone" placeholder="0118 999 88199 9119 725 3" required/>
                                </div>
                            </div>
                            <div className="row">
                                <br />
                                <div className="col-sm-12">
                                    <label htmlFor="shippingAddress">Billing Address</label>
                                    <input className="form-control" type="text" name="shippingAddress" placeholder="123 42nd AVE NE" required/>
                                </div>
                            </div>
                            <div className="row">
                                <br />
                                <div className="col-sm-12">
                                    <input className="form-control" type="text" name="shippingAddressAdditional" placeholder="Apartment/Suite/Other" />
                                </div>
                            </div>
                            <div className="row">
                                <br />
                                <div className="col-sm-12">
                                    <label htmlFor="shippingCity">City</label>
                                    <input className="form-control" type="text" name="shippingCity" placeholder="Winterhold" required/>
                                </div>
                            </div>
                            <div className="row">
                                <br />
                                <div className="col-sm-6">
                                    <label htmlFor="shippingState">State</label>
                                    <select className="form-control" defaultValue="default">
                                        <option disabled value="default">-Select State-</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="zipcode">Zipcode</label>
                                    <input className="form-control" type="text" name="zipcode" placeholder="46202" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <h2>2. Payment Method</h2>
                    <div className="well">
                        <div className="row">
                            <div className="col-sm-12">
                                <label htmlFor="cardType">Card Type</label>
                                <select className="form-control">
                                    <option value="visa">Visa</option>
                                    <option value="mastercard">Mastercard</option>
                                    <option value="amex">American Express</option>
                                    <option value="travelers">Travelers</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <br />
                            {/* <div className="col-sm-12"> */}
                            <label htmlFor="paymentCardNumber">Card Number</label>
                            <input className="form-control" type="text" name="paymentCardNumber" placeholder="1234567890123456" required/>
                            {/* </div> */}
                            {/* </div> */}
                            {/* <div className="form-group"> */}
                            <br />
                            {/* <div className="col-sm-12"> */}
                            <label htmlFor="paymentCardHolderName">Cardholder Name</label>
                            <input className="form-control" type="text" name="paymentCardHolderName" placeholder="Danger Mouse" required/>
                            <br />
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="paymentExpirationMonth">Exp Month</label>
                                    <select className="form-control">
                                        <option value="01">01-January</option>
                                        <option value="02">02-February</option>
                                        <option value="03">03-March</option>
                                        <option value="04">04-April</option>
                                        <option value="05">05-May</option>
                                        <option value="06">06-June</option>
                                        <option value="07">07-July</option>
                                        <option value="08">08-August</option>
                                        <option value="09">09-September</option>
                                        <option value="10">10-October</option>
                                        <option value="11">11-November</option>
                                        <option value="12">12-December</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="paymentExpirationYear">Exp Year</label>
                                    <select className="form-control">
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-sm-6">
                                <label htmlFor="paymentVerificationNumber">Card Verification Number</label>
                                <input className="form-control" type="text" name="paymentVerificationNumber" placeholder="999" required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4" id="cart-confirmation">
                    <h2>3. Confirm your order</h2>
                    <div className="well">
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="http://www.unsplash.it/100?random" width="100" />
                            </div>
                            <div className="col-sm-3">
                                test
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-default btn-block">Purchase</button>
                </div>
            </div>
        </div>
    }
}

export default CartDisplay
