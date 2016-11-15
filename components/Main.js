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
                {/* Header with links to socks and cart. The socks link can maybe be the logo and the cart link can be the image of a cart */}
                <div className="col-sm-4">
                <Link to="/socks"><img alt="Brand" className="logo" src="img/sock-o-rama.png" /></Link>
                </div>
                <div className="col-sm-4">
                    <form className="navbar-form navbar-left" role="search">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" />
                      <button type="submit" className="btn btn-default">Submit</button>
                      </div>
                    </form>
                </div>
                <div className="col-sm-3 col-sm-offset-1">
                    <Link to="/cart">
                    {/* TODO: where # is, put the counter of items.*/}
                        <div className="glyphicon glyphicon-shopping-cart"> #
                        </div>
                    </Link>
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
