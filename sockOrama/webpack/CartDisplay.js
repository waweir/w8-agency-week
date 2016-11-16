import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class CartDisplay extends React.Component {
   constructor(props) {
      super(props)
      classAutoBind(this)
      // this.state = sharedState()
      this.state = {
         checked: true,
         email: "",
         billingFirstName: "",
         billingLastName: "",
         billingTelephone: "",
         billingAddress: "",
         billingAddressAdditional: "",
         billingCity: "",
         billingZipcode: "",
         shippingFirstName: "",
         shippingLastName: "",
         shippingTelephone: "",
         shippingAddress: "",
         shippingAddressAdditional: "",
         shippingCity: "",
         shippingZipcode: "",
         paymentCardNumber: "",
         paymentCardHolderName: "",
         paymentVerificationNumber: "",

      }
      this.handleChange = this.handleChange.bind(this)
      this.submitOrder = this.submitOrder.bind(this)
   }
   componentDidMount() {
      attachSharedState(this)
   }
   componentWillUnmount() {
      detachSharedState(this)

      // fetch and gather cart ID then render cart

   }
   handleChange() {
      this.setState({
         checked: !this.state.checked
      })
   }
   submitOrder() {
      var data = new FormData()
      // data.append('billingFirstName', this.state.billingFirstName)
      console.log(document.getElementById('email').value)
      console.log(document.getElementById('billingFirstName').value)
      console.log(document.getElementById('billingLastName').value)
      console.log(document.getElementById('billingTelephone').value)
      console.log(document.getElementById('billingAddress').value)
      console.log(document.getElementById('billingAddressAdditional').value)
      console.log(document.getElementById('billingCity').value)
      console.log(document.getElementById('billingZipcode').value)
      console.log(document.getElementById('shippingFirstName').value)
      console.log(document.getElementById('shippingLastName').value)
      console.log(document.getElementById('shippingTelephone').value)
      console.log(document.getElementById('shippingAddress').value)
      console.log(document.getElementById('shippingAddressAdditional').value)
      console.log(document.getElementById('shippingCity').value)
      console.log(document.getElementById('shippingZipcode').value)
      console.log(document.getElementById('paymentCardNumber').value)
      console.log(document.getElementById('paymentCardHolderName').value)
      console.log(document.getElementById('paymentVerificationNumber').value)
      data.append('email', document.getElementById('email').value)
      data.append('billingLastName', document.getElementById('billingLastName').value)
      data.append('billingLastName', document.getElementById('billingLastName').value)
      data.append('billingTelephone', document.getElementById('billingTelephone').value)
      data.append('billingAddress', document.getElementById('billingAddress').value)
      data.append('billingAddressAdditional', document.getElementById('billingAddressAdditional').value)
      data.append('billingCity', document.getElementById('billingCity').value)
      data.append('billingZipcode', document.getElementById('billingZipcode').value)
      data.append('shippingFirstName', document.getElementById('shippingFirstName').value)
      data.append('shippingLastName', document.getElementById('shippingLastName').value)
      data.append('shippingTelephone', document.getElementById('shippingTelephone').value)
      data.append('shippingAddress', document.getElementById('shippingAddress').value)
      data.append('shippingAddressAdditional', document.getElementById('shippingAddressAdditional').value)
      data.append('shippingCity', document.getElementById('shippingCity').value)
      data.append('shippingZipcode', document.getElementById('shippingZipcode').value)
      data.append('paymentCardNumber', document.getElementById('paymentCardNumber').value)
      data.append('paymentCardHolderName', document.getElementById('paymentCardHolderName').value)
      data.append('paymentVerificationNumber', document.getElementById('paymentVerificationNumber').value)
      // data.append('billingLastName', this.state.billingLastName)
      // data.append('billingLastName', this.state.billingLastName)

      console.log(data.entries)
      // fetch('', {
      //    method: 'POST',
      //    body: data
      // })
      // .then(response => response.json())
      // .then() // fire off a post submit operation with the response


   }
   render() {
      // Hide/Show Shipping Address when checkbox marked
      const content = this.state.checked ? null : <div className="">
         <h2>Shipping Address</h2>
         <div className="form-group well billingAddress">
            <div className="row">
               <div className="col-sm-6">
                  <label htmlFor="shippingFirstName">First Name</label>
                  <input className="form-control" type="text" name="shippingFirstName" id="shippingFirstName" placeholder="Snow" required/>
               </div>
               <div className="col-sm-6">
                  <label htmlFor="shippingLastName">Last Name</label>
                  <input className="form-control" type="text" name="shippingLastName" id="shippingLastName" placeholder="White" required/>
               </div>
            </div>
            <div className="row">
               <br />
               <div className="col-sm-12">
                  <label htmlFor="shippingTelephone">Telephone</label>
                  <input className="form-control" type="tel" name="shippingTelephone" id="shippingTelephone" placeholder="123 456 7890" required/>
               </div>
            </div>
            <div className="row">
               <br />
               <div className="col-sm-12">
                  <label htmlFor="shippingAddress">Shipping Address</label>
                  <input className="form-control" type="text" name="shippingAddress" id="shippingAddress" placeholder="12 Upup Downdown PKWY" required/>
               </div>
            </div>
            <div className="row">
               <br />
               <div className="col-sm-12">
                  <input className="form-control" type="text" name="shippingAddressAdditional" id="shippingAddressAdditional" placeholder="Unit Left Right Left Right" />
               </div>
            </div>
            <div className="row">
               <br />
               <div className="col-sm-12">
                  <label htmlFor="shippingCity">City</label>
                  <input className="form-control" type="text" name="shippingCity" id="shippingCity" placeholder="Bee Ayystart" required/>
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
                  <label htmlFor="shippingZipcode">Zipcode</label>
                  <input className="form-control" type="text" name="shippingZipcode" id="shippingZipcode" placeholder="46202" required/>
               </div>
            </div>
         </div>
      </div>;

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
                        <input className="form-control" type="text" name="billingFirstName" id="billingFirstName" placeholder="Jon" required />
                     </div>
                     <div className="col-sm-6">
                        <label htmlFor="billingLastName">Last Name</label>
                        <input className="form-control" type="text" name="billingLastName" id="billingLastName" placeholder="Snow" required/>
                     </div>
                  </div>
                  <div className="row">
                     <br />
                     <div className="col-sm-6">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" id="email" placeholder="Winter@is.coming" required/>
                     </div>
                     <div className="col-sm-6">
                        <label htmlFor="billingTelephone">Telephone</label>
                        <input className="form-control" type="tel" name="billingTelephone" id="billingTelephone" placeholder="0118 999 88199 9119 725 3" required/>
                     </div>
                  </div>
                  <div className="row">
                     <br />
                     <div className="col-sm-12">

                        <label htmlFor="billingAddress">Billing Address</label>
                        <input className="form-control" type="text" name="billingAddress" id="billingAddress" placeholder="123 42nd AVE NE" required/>
                     </div>
                  </div>
                  <div className="row">
                     <br />
                     <div className="col-sm-12">

                        <input className="form-control" type="text" name="billingAddressAdditional" id="billingAddressAdditional"  placeholder="Apartment/Suite/Other" />
                     </div>
                  </div>
                  <div className="row">
                     <br />
                     <div className="col-sm-12">

                        <label htmlFor="billingCity">City</label>
                        <input className="form-control" type="text" name="billingCity" id="billingCity" placeholder="Winterhold" required/>
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
                        <label htmlFor="billingZipcode">Zipcode</label>
                        <input className="form-control" type="text" name="billingZipcode" id="billingZipcode" placeholder="46202" required/>
                     </div>
                  </div>
               </div>
               <div>
                  <label className="" htmlFor="shipToBillingAddress">
                     <input type="checkbox" id="shipToBillingAddress"  checked={this.state.checked} onChange={this.handleChange} /> Ship to billing address?
                  </label>
               </div>
               {content}
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
                     <input className="form-control" type="text" name="paymentCardNumber" id="paymentCardNumber" placeholder="1234567890123456" required/>
                     {/* </div> */}
                     {/* </div> */}
                     {/* <div className="form-group"> */}
                     <br />
                     {/* <div className="col-sm-12"> */}
                     <label htmlFor="paymentCardHolderName">Cardholder Name</label>
                     <input className="form-control" type="text" name="paymentCardHolderName" id="paymentCardHolderName" placeholder="Danger Mouse" required/>
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
                        <input className="form-control" type="text" name="paymentVerificationNumber" id="paymentVerificationNumber" placeholder="999" required/>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-sm-4" id="cart-confirmation">
               <h2>3. Confirm your order</h2>
               <div className="well">
                  <div className="row">
                     <div className="col-sm-4">
                        <img className="thumbnail" src="http://www.unsplash.it/100?random" width="100" />
                     </div>
                     <div className="col-sm-4">
                        <h5>ITEM NAME</h5>
                        <p>Color:<strong> Color</strong></p>
                        <label>qty </label>
                        <select>
                           <option value="01">01</option>
                           <option value="02">02</option>
                           <option value="03">03</option>
                           <option value="04">04</option>
                           <option value="05">05</option>
                        </select>
                     </div>
                     <div className="col-sm-4 justify-right verticle-bottom">
                        <span>$0.00</span>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-sm-6">
                        <p>Sub-total</p>
                        <p>Shipping ($2/pair)</p>
                        <p>Total</p>
                     </div>
                     <div className="col-sm-6 justify-right">
                        <p>$0.00</p>
                        <p>$0.00</p>
                        <p>$0.00</p>
                     </div>
                  </div>
               </div>
               <input type="checkbox" id="newsletter" name="newsletter" /><label htmlFor="newsletter">Like socks? Want newsletter?!</label>
               <button className="btn btn-default btn-block" onClick={this.submitOrder}>Purchase</button>
            </div>
         </div>
      </div>
   }
}

export default CartDisplay
