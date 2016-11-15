import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Main from '../webpack/Main'
import SockDisplay from './SockDisplay'
import CartDisplay from './CartDisplay'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={SockDisplay} />
            <Route path="/socks" component={SockDisplay} />
            <Route path="/cart" component={CartDisplay} />
        </Route>
    </Router>
    , document.getElementById('socks')
)
