import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
        <div className="panel panel-default">
            <div className="panel-body">
            <h4>This will be the header</h4>
            {/* Header with links to socks and cart. The socks link can maybe be the logo and the cart link can be the image of a cart */}
            <div className="col-sm-4">
            <Link to="/socks">Test link to socks</Link>
            </div>
            <div className="col-sm-4">
                Search bar
            </div>
            <div className="col-sm-4">
                <Link to="/cart">Test link to cart</Link>
            </div>
            </div>
            </div>
            <div>
                <p>This will display the child pages</p>
                {this.props.children}
            </div>
        </div>
    }
}

export default Main
