import { ADD_CARD, SHOW_CARD, RECEIVE_CARDS } from '../actions/cards'
import card from './card'

export default function cards(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      return state
    case RECEIVE_CARDS:
      return state.concat(action.cards)
    case SHOW_CARD:
      return state.map(_card =>
        card(_card, action)
      )
    default:
      return state
  }
}
