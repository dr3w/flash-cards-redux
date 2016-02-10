import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const reduxRouterMiddleware = syncHistory(browserHistory)

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunk,
    reduxRouterMiddleware
  ),
  // https://github.com/zalmoxisus/redux-devtools-extension
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
