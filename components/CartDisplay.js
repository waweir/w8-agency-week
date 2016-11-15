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
                    <h2>Billing</h2>
                    <div className="form-group well">
                        <div className="row">
                            <div className="col-sm-6">
                                <label for="billingFirstName">First Name</label>
                                <input type="text" name="billingFirstName" placeholder="Jon" required/>
                            </div>
                            <div className="col-sm-6">
                                <label for="billingLastName">Last Name</label>
                                <input type="text" name="billingLastName" placeholder="Snow" required/>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-sm-6">
                                <label for="email">Email</label>
                                <input type="email" name="email" placeholder="Winter@is.coming" required/>
                            </div>
                            <div className="col-sm-6">
                                <label for="telephone">Telephone</label>
                                <input type="phone" name="telephone" placeholder="0118 999 88199 9119 725 3" required/>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-sm-12">

                                <label for="billingAddress">Billing Address</label>
                                <input className="form-control" type="text" name="billingAddress" placeholder="123 42nd AVE NE" required/>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-sm-12">

                                <input className="form-control" type="text" name="billingAddress" placeholder="Apartment/Suite/Other" required/>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-sm-12">

                                <label for="billingCity">City</label>
                                <input className="form-control" type="text" name="billingCity" placeholder="Winterhold" required/>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-sm-6">
                                <label for="state">State</label>
                                <select>
                                    <option disabled selected value> -- select an option -- </option>
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
                                <label for="zipcode">Zipcode</label>
                                <input type="text" name="zipcode" placeholder="46202" required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <h2>Shipping Panel</h2>
                </div>
                <div className="col-sm-4">
                    <h2>Confirm your order</h2>
                    <button className="btn btn-default btn-block">Purchase</button>
                </div>
            </div>
        </div>
    }
}

export default CartDisplay
