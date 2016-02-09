import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'
import { getAllCards } from '../common/actions/cards'

const store = configureStore()
const rootElement = document.getElementById('root')

store.dispatch(getAllCards());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
