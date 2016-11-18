import React from 'react'
import { Link } from 'react-router'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import classAutoBind from 'react-helpers/dist/classAutoBind'


class Main extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }
    componentDidMount() {
         attachSharedState(this)
         this.setState({
             itemsInCart: 0
         })
         if (sessionStorage.getItem('cart_token') == null) {
           console.log(this.state.itemsInCart)
         } else {
           console.log(sessionStorage.getItem('cart_token'))
           fetch('/view_cart?token=' + sessionStorage.getItem('cart_token'))
           .then(response => response.json())
           .then(repsonse => {
             console.log(response)

           })
         }
         // console.log(this.state.itemsInCart)
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    searchEnter(event) {
        if (event.key === 'Enter') {
            this.searchClick()
        }
        else {
            sharedState({
                enteredSearchTerm: event.target.value
            })
        }
    }
    // updateSearchTerm(e) {
    //     thiState({
    //         searchTerm: e.target.value
    //     })
    // }
    searchClick() {
        var searchValue = this.state.enteredSearchTerm
        console.log(searchValue)
        // var searchTerm = this.state.searchTerm
        sharedState({
            updateSearchResults: searchValue
        })
    }

    render() {
        return <div>
            <div className="header row">
                <div className="col-xs-12 col-sm-4">
                <Link to="/socks"><img alt="Brand" className="logo" src="img/sock-o-rama.png" /></Link>
                </div>
                <div className="col-xs-8 col-sm-4 text-center">
                    {/* <form className="form-inline" role="search"> */}
                      <div className="form-group searchBar">
                        <input id="searchInput" type="text" className="form-control" placeholder="Search" onChange={this.searchEnter}/>
                      <button type="button" className="btn btn-default searchInput" onClick={this.searchClick}>Submit</button>
                      </div>
                    {/* </form> */}
                </div>
                <div className="col-xs-4 col-sm-4 text-right">
                    <Link to="/cart">
                    {/* TODO: where # is, put the counter of items.*/}
                    <button className="cartButton btn btn-default btn-lg">
                        <div className="glyphicon glyphicon-shopping-cart"></div>
                        <span className="badge">{this.state.itemsInCart}</span>
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
