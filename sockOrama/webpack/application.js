import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Main from './Main'
import SockDisplay from './SockDisplay'
import CartDisplay from './CartDisplay'

document.addEventListener('DOMContentLoaded', function() {

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

})
