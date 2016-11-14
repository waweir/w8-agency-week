import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Main from '../components/Main'
import SockDisplay from '../components/SockDisplay'
import CartDisplay from '../components/CartDisplay'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="/socks" component={SockDisplay} />
            <Route path="/cart" component={CartDisplay} />
        </Route>
    </Router>
    , document.getElementById('socks')
)
