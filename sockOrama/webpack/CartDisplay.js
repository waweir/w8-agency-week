import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import accounting from 'accounting'

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
         billingState: "",
         billingZipcode: "",
         shippingFirstName: "",
         shippingLastName: "",
         shippingTelephone: "",
         shippingAddress: "",
         shippingAddressAdditional: "",
         shippingCity: "",
         shippingState: "",
         shippingZipcode: "",
         cardType: "",
         paymentCardNumber: "",
         paymentCardHolderName: "",
         paymentExpirationMonth: "",
         paymentExpirationYear: "",
         paymentVerificationNumber: "",
         cart: [],
         cartToken: "",
         subtotal: "",
         tax: "",
         shipping: "",
         total: "",
         customer: "",
         ship_to_address: "",


      }
      this.handleChange = this.handleChange.bind(this)
      this.submitOrder = this.submitOrder.bind(this)
      // this.calculateSubtotal = this.calculateSubtotal.bind(this)
      // this.calculateShipping = this.calculateShipping.bind(this)
      this.calculateTotal = this.calculateTotal.bind(this)
      // this.typingBillingFirstName = this.typingBillingFirstName.bind(this)
      // this.typingBillingLastName = this.typingBillingLastName.bind(this)
      this.typing = this.typing.bind(this)
      // this.collectBillingAddress = this.collectBillingAddress.bind(this)
      this.collectShippingAddress = this.collectShippingAddress.bind(this)
      this.postShippingInfoToCart = this.postShippingInfoToCart.bind(this)

   }
   componentDidMount() {
      attachSharedState(this)
      // http://localhost:5000/view_cart?token=CYGZCTF8HmpDbN2UQzbVYRNF
      fetch('/view_cart?token=' + sessionStorage.getItem('cart_token')) // grab cart token from session storage
      // fetch('/view_cart?token=jzyGctVrpWWMkd1c1dSYTs8J')
      // fetch('http://localhost:5000/socks')
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => {
         console.log(response.cart.subtotal)
         this.setState ({
            cart: response,
            subtotal: response.cart.subtotal,
            tax: response.cart.tax,
            shipping: response.cart.shipping,
            total: response.cart.total,
         })
      })
      console.log(this.state.subtotal)
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

      if (this.state.checked === true) {
         this.setState({

         })
      }
      this.postShippingInfoToCart()


   }

   typing(e) {
      var updatedState = {}
      updatedState[e.target.name] = e.target.value
      // console.log(updatedState)
      this.setState(updatedState)
      this.collectShippingAddress()
      console.log(e)
   }
   // typingBillingLastName(e) {
   //    this.setState({
   //       billingLastName: e.target.value
   //    })
   // }
   // collectBillingAddress() {
   //    this.setState({
   //       customer: this.state.billingFirstName + ' ' + this.state.billingLastName,
   //    })
   //    console.log(this.state.customer)
   // }
   collectShippingAddress() {
      this.setState({
         customer: this.state.shippingFirstName + ' ' + this.state.shippingLastName,
         ship_to_address: this.state.shippingAddress + ' ' + this.state.shippingAddressAdditional + ' ' + this.state.shippingCity + ' ' + this.state.shippingState + ' ' + this.state.shippingZipcode,

      })
      // console.log(this.state.customer)
   }
   postShippingInfoToCart() {
      // fetch('/order_info?token=jzyGctVrpWWMkd1c1dSYTs8J', {
      fetch('/order_info?token=' + sessionStorage.getItem('cart_token'), {
      // fetch('/order_info?token=A2Vnnfs29EEwVFVocyN7hqsf&ship_to_address=20 fire street&email=this@sucks.com&customer=Peter Sherman', {
          body: JSON.stringify({
            // token: 'A2Vnnfs29EEwVFVocyN7hqsf',
            //  token: sessionStorage.getItem('cart_token')
            ship_to_address: this.state.ship_to_address,
            email: this.state.email,
            customer: this.state.customer,

          }),
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
   }
   // calculateSubtotal () {
   //
   // }
   //
   // calculateShipping() {
   //
   // }

   calculateTotal() {

   }
   render() {
      var cartArray = []
      var socksId = []
      // var orderTotal = 0
      // var cart = this.state.cart.map((sock, i) => {
      //    //   if (socksId.indexOf(sock.name) === -1) {
      //    if (socksId.indexOf(sock.name) === -1) {
      //       socksId.push(sock.name)
      //       cartArray.push(sock)
      //       // orderSubtotal += sock.price
      //       // orderShipping += 2
      //       //  orderTotal += orderShipping + orderSubtotal
      //    }
      // })


      // console.log(cartArray)
      // var displayOrder = cartArray.map((sock, i) => { //Showing socks now, change to cart API fetch when available
      //    return  <div className="col-sm-12" key={i}>
      //       <div className="panel panel-default">
      //          <div className="panel-body sock-panel">
      //             <div className="row">
      //                <div className="col-sm-4">
      //                   <img src="http://unsplash.it/100?random" width="100"/>
      //                </div>
      //                <div className="col-sm-2">
      //                   <p>{sock.name}</p>
      //                </div>
      //                <div className="col-sm-6 text-right">
      //                   <p>{sock.price}</p>
      //                </div>
      //             </div>
      //          </div>
      //       </div>
      //    </div>
      // })

      // Hide/Show Shipping Address when checkbox marked
      // const content = this.state.checked ? null : <div className="">
      //    <h2>Shipping Address</h2>
      //    <div className="form-group well billingAddress">
      //       <div className="row">
      //          <div className="col-sm-6">
      //             <label htmlFor="shippingFirstName">First Name</label>
      //             <input className="form-control" type="text" name="shippingFirstName" id="shippingFirstName" placeholder="Snow" required/>
      //          </div>
      //          <div className="col-sm-6">
      //             <label htmlFor="shippingLastName">Last Name</label>
      //             <input className="form-control" type="text" name="shippingLastName" id="shippingLastName" placeholder="White" required/>
      //          </div>
      //       </div>
      //       <div className="row">
      //          <br />
      //          <div className="col-sm-12">
      //             <label htmlFor="shippingTelephone">Telephone</label>
      //             <input className="form-control" type="tel" name="shippingTelephone" id="shippingTelephone" placeholder="123 456 7890" required/>
      //          </div>
      //       </div>
      //       <div className="row">
      //          <br />
      //          <div className="col-sm-12">
      //             <label htmlFor="shippingAddress">Shipping Address</label>
      //             <input className="form-control" type="text" name="shippingAddress" id="shippingAddress" placeholder="12 Upup Downdown PKWY" required/>
      //          </div>
      //       </div>
      //       <div className="row">
      //          <br />
      //          <div className="col-sm-12">
      //             <input className="form-control" type="text" name="shippingAddressAdditional" id="shippingAddressAdditional" placeholder="Unit Left Right Left Right" />
      //          </div>
      //       </div>
      //       <div className="row">
      //          <br />
      //          <div className="col-sm-12">
      //             <label htmlFor="shippingCity">City</label>
      //             <input className="form-control" type="text" name="shippingCity" id="shippingCity" placeholder="Bee Ayystart" required/>
      //          </div>
      //       </div>
      //       <div className="row">
      //          <br />
      //          <div className="col-sm-6">
      //             <label htmlFor="shippingState">State</label>
      //             <select id="shippingState" name="shippingState" className="form-control" value={this.state.shippingState} onChange={this.typing}>
      //                <option disabled value="default">-Select State-</option>
      //                <option value="AL">Alabama</option>
      //                <option value="AK">Alaska</option>
      //                <option value="AZ">Arizona</option>
      //                <option value="AR">Arkansas</option>
      //                <option value="CA">California</option>
      //                <option value="CO">Colorado</option>
      //                <option value="CT">Connecticut</option>
      //                <option value="DE">Delaware</option>
      //                <option value="DC">District Of Columbia</option>
      //                <option value="FL">Florida</option>
      //                <option value="GA">Georgia</option>
      //                <option value="HI">Hawaii</option>
      //                <option value="ID">Idaho</option>
      //                <option value="IL">Illinois</option>
      //                <option value="IN">Indiana</option>
      //                <option value="IA">Iowa</option>
      //                <option value="KS">Kansas</option>
      //                <option value="KY">Kentucky</option>
      //                <option value="LA">Louisiana</option>
      //                <option value="ME">Maine</option>
      //                <option value="MD">Maryland</option>
      //                <option value="MA">Massachusetts</option>
      //                <option value="MI">Michigan</option>
      //                <option value="MN">Minnesota</option>
      //                <option value="MS">Mississippi</option>
      //                <option value="MO">Missouri</option>
      //                <option value="MT">Montana</option>
      //                <option value="NE">Nebraska</option>
      //                <option value="NV">Nevada</option>
      //                <option value="NH">New Hampshire</option>
      //                <option value="NJ">New Jersey</option>
      //                <option value="NM">New Mexico</option>
      //                <option value="NY">New York</option>
      //                <option value="NC">North Carolina</option>
      //                <option value="ND">North Dakota</option>
      //                <option value="OH">Ohio</option>
      //                <option value="OK">Oklahoma</option>
      //                <option value="OR">Oregon</option>
      //                <option value="PA">Pennsylvania</option>
      //                <option value="RI">Rhode Island</option>
      //                <option value="SC">South Carolina</option>
      //                <option value="SD">South Dakota</option>
      //                <option value="TN">Tennessee</option>
      //                <option value="TX">Texas</option>
      //                <option value="UT">Utah</option>
      //                <option value="VT">Vermont</option>
      //                <option value="VA">Virginia</option>
      //                <option value="WA">Washington</option>
      //                <option value="WV">West Virginia</option>
      //                <option value="WI">Wisconsin</option>
      //                <option value="WY">Wyoming</option>
      //             </select>
      //          </div>
      //          <div className="col-sm-6">
      //             <label htmlFor="shippingZipcode">Zipcode</label>
      //             <input className="form-control" type="text" name="shippingZipcode" id="shippingZipcode" placeholder="46202" required/>
      //          </div>
      //       </div>
      //    </div>
      // </div>;

      return <div className="container checkout">
         {/* whoever works on this can decide if the cart display and billing and shipping panel need to be 2 separate components that are displayed through this render function, or if they are just defined here */}
         <div className="row">
            <h1>Checkout</h1>
         </div>
         <div className="row">
            <div className="col-sm-4">
               {/* <h2>1. Billing Address</h2>
               <form action="/charges" method="POST">
                  <div id="card_errors"></div>
                  <label className="amount">
                    <span>Amount: $5.00</span>
                  </label>
                  <input type="hidden" name="id" value="1" />
               </form>
               <div className="form-group well billingAddress">
                  <div className="row">
                     <div className="col-sm-6">
                        <label htmlFor="billingFirstName">First Name</label>
                        <input className="form-control" type="text" name="billingFirstName" onChange={this.typing} value={this.state.billingFirstName} id="billingFirstName" placeholder="Jon" required />
                     </div>
                     <div className="col-sm-6">
                        <label htmlFor="billingLastName">Last Name</label>
                        <input className="form-control" type="text" name="billingLastName" onChange={this.typing} value={this.state.billingLastName} id="billingLastName" placeholder="Snow" required/>
                     </div>
                  </div>
                  <div className="row">
                     <br />
                     <div className="col-sm-6">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" id="email" onChange={this.typing} value={this.state.email} placeholder="Winter@is.coming" required/>
                     </div>
                     <div className="col-sm-6">
                        <label htmlFor="billingTelephone">Telephone</label>
                        <input className="form-control" type="tel" name="billingTelephone" onChange={this.typing} value={this.state.billingTelephone} id="billingTelephone" placeholder="0118 999 88199 9119 725 3" required/>
                     </div>
                  </div>
                  <div className="row">
                     <br />
                     <div className="col-sm-12">

                        <label htmlFor="billingAddress">Billing Address</label>

                     <input className="form-control" type="text" name="billingAddress" onChange={this.typing} value={this.state.billingAddress} id="billingAddress" placeholder="123 42nd AVE NE" required/>
                     </div>
                  </div>
                  <div className="row">
                     <br />
                     <div className="col-sm-12">

                        <input className="form-control" type="text" name="billingAddressAdditional" id="billingAddressAdditional" onChange={this.typing} value={this.state.billingAddressAdditional}   placeholder="Apartment/Suite/Other" />
                     </div>
                  </div>
                  <div className="row">
                     <br />
                     <div className="col-sm-12">

                        <label htmlFor="billingCity">City</label>
                        <input className="form-control" type="text" name="billingCity" id="billingCity" onChange={this.typing} value={this.state.billingCity} placeholder="Winterhold" required/>
                     </div>
                  </div>
                  <div className="row">
                     <br />
                     <div className="col-sm-6">
                        <label htmlFor="billingState">State</label>
                        <select id="billingState" name="billingState" className="form-control" value={this.state.billingState} onChange={this.typing}>
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
            </div> */}
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
                     <select id="shippingState" name="shippingState" className="form-control" value={this.state.shippingState} onChange={this.typing}>
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
         </div>
            <div className="col-sm-4">
               <h2>2. Payment Method</h2>
               <div className="well">
                  <div className="row">
                     <div className="col-sm-12">
                        <label htmlFor="cardType">Card Type</label>
                        <select id="cardType" name="cardType" className="form-control" value={this.state.cardType} onChange={this.typing}>
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
                     <input className="form-control" type="text" name="paymentCardNumber" id="paymentCardNumber" onChange={this.typing} value={this.state.paymentCardNumber} placeholder="1234567890123456" required/>
                     {/* </div> */}
                     {/* </div> */}
                     {/* <div className="form-group"> */}
                     <br />
                     {/* <div className="col-sm-12"> */}
                     <label htmlFor="paymentCardHolderName">Cardholder Name</label>
                     <input className="form-control" type="text" name="paymentCardHolderName" id="paymentCardHolderName" onChange={this.typing} value={this.state.paymentCardHolderName} placeholder="Danger Mouse" required/>
                     <br />
                     <div className="row">
                        <div className="col-sm-6">
                           <label htmlFor="paymentExpirationMonth">Exp Month</label>
                           <select id="paymentExpirationMonth" name="paymentExpirationMonth" className="form-control" value={this.state.paymentExpirationMonth} onChange={this.typing}>
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
                           <select id="paymentExpirationYear" name="paymentExpirationYear" className="form-control" value={this.state.paymentExpirationYear} onChange={this.typing}>
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
                        <input className="form-control" type="text" name="paymentVerificationNumber" id="paymentVerificationNumber" onChange={this.typing} value={this.state.paymentVerificationNumber} placeholder="999" required/>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-sm-4" id="cart-confirmation">
               <h2>3. Confirm your order</h2>
               <div className="well">
                  <div className="row">
                     {/* <div className="col-sm-4">
                        <img className="thumbnail" src="http://www.unsplash.it/100?random" width="100" />
                     </div>
                     <div className="col-sm-4"> */}

                     {/* { displayOrder } */}

                     {/* <h5>ITEM NAME</h5>
                        <p>Color:<strong> Color</strong></p>
                        <label>qty </label>
                        <select>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                     </select> */}
                     {/* </div> */}
                     {/* <div className="col-sm-4 justify-right verticle-bottom">
                        <span>$0.00</span>
                     </div> */}
                  </div>
                  <div className="row">
                     <div className="col-sm-6">
                        <p>Sub-total</p>
                        <p>Tax (7%)</p>
                        <p>Shipping ($2/pair)</p>
                        <p>Total</p>
                     </div>
                     <div className="col-sm-6 justify-right">
                        <p>{ accounting.formatMoney(this.state.subtotal/100) }</p>
                        <p>{ accounting.formatMoney(this.state.tax/100) }</p>
                        <p>{ accounting.formatMoney(this.state.shipping/100) }</p>
                        <p>{ accounting.formatMoney(this.state.total/100) }</p>
                     </div>
                  </div>
               </div>
               <input type="checkbox" id="newsletter" name="newsletter" /><label htmlFor="newsletter">Like socks? Want newsletter?!</label>
               <button className="btn btn-success btn-block" onClick={this.submitOrder}>Purchase</button>
            </div>
         </div>
      </div>
   }
}

export default CartDisplay
