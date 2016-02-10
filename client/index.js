import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import configureStore from '../common/store/configureStore'

import App from '../common/routes/App'
import AddCard from '../common/routes/AddCard'

import { getAllCards } from '../common/actions/cards'

const store = configureStore()
const rootElement = document.getElementById('root')

store.dispatch(getAllCards());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="add" component={AddCard}/>
    </Router>
  </Provider>,
  rootElement
)
