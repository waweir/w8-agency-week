import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <div className="header row">
                <div className="col-xs-12 col-sm-4">
                <Link to="/socks"><img alt="Brand" className="logo" src="img/sock-o-rama.png" /></Link>
                </div>
                <div className="col-xs-8 col-sm-4 text-center">
                    <form className="form-inline" role="search">
                      <div className="form-group searchBar">
                        <input type="text" className="form-control" placeholder="Search" />
                      <button type="submit" className="btn btn-default">Submit</button>
                      </div>
                    </form>
                </div>
                <div className="col-xs-4 col-sm-4 text-right">
                    <Link to="/cart">
                    {/* TODO: where # is, put the counter of items.*/}
                    <button className="cartButton btn btn-default btn-lg">
                        <div className="glyphicon glyphicon-shopping-cart"></div>
                        <span className="badge">#</span>
                    </button>
                    </Link>
                </div>
            </div>
            <div className="children">
                {this.props.children}
            </div>
            <footer className="row">
                <div className="col-xs-9 text-center">
                    <img id="teamLogo" src="img/IWT-logo.jpg" alt="Worker's Logo" />
                </div>
                <div className="col-xs-1 text-center pushDown">
                    <a href="#">
                        <div className="fa fa-facebook" aria-hidden="true"></div>
                    </a>
                </div>
                <div className="col-xs-1 text-center pushDown">
                    <a href="#">
                        <div className="fa fa-twitter" aria-hidden="true"></div>
                    </a>
                </div>
                <div className="col-xs-1 text-center pushDown">
                    <a href="#">
                        <div className="fa fa-pinterest-p" aria-hidden="true"></div>
                    </a>
                </div>
            </footer>
        </div>
    }
}

export default Main
