import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router'

import Template from './components/_template'

import routeGenerator from './routes'
import { prefixLink } from 'helpers'

import routes from './routes'

// Exported static site renderer:
export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)
  match({
    routes: routes,
    location: location
  }, function(error, redirectLocation, renderProps) {
    var html = ReactDOMServer.renderToStaticMarkup(
      <Template>
        <RouterContext {...renderProps} />
      </Template>
    );
    callback(null, html)
  })
}
