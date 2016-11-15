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
                <div className="col-sm-1 col-sm-offset-3">
                    <Link to="/cart">
                    {/* TODO: where # is, put the counter of items.*/}
                    <button className=" btn btn-primary btn-success">
                        <div className="glyphicon glyphicon-shopping-cart">
                            <span className="badge">#</span>
                        </div>
                    </button>
                    </Link>
                </div>
                </div>
            </div>
            <div>
                <p>This will display the child pages</p>
                {this.props.children}
            </div>
            <footer className="row">
                <div className="col-xs-1 col-xs-offset-5">
                    <img id="teamLogo" src="img/IWT-logo.jpg" alt="Worker's Logo" />
                </div>
                <div className="col-xs-1 col-xs-offset-3 pushDown">
                    <Link to="#">
                        <div className="fa fa-facebook" aria-hidden="true"></div>
                    </Link>
                </div>
                <div className="col-xs-1 pushDown">
                    <Link to="#">
                        <div className="fa fa-twitter" aria-hidden="true"></div>
                    </Link>
                </div>
                <div className="col-xs-1 pushDown">
                    <Link to="#">
                        <div className="fa fa-pinterest-p" aria-hidden="true"></div>
                    </Link>
                </div>
            </footer>
        </div>
    }
}

export default Main
