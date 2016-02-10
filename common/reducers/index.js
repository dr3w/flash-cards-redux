import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'

import cards from './cards'

const rootReducer = combineReducers({
  cards,
  routing: routeReducer
})

export default rootReducer
