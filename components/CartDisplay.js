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
        return <div>
            {/* whoever works on this can decide if the cart display and billing and shipping panel need to be 2 separate components that are displayed through this render function, or if they are just defined here */}
            <h1>Cart Display</h1>
            <div className="col-sm-8">
                Cart Display
            </div>
            <div className="col-sm-4">
                Billing and Shipping Panel
            </div>
            <button className="btn btn-default btn-block">Purchase</button>
        </div>
    }
}

export default CartDisplay
