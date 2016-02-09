import { ADD_CARD, SHOW_CARD, HIDE_CARD, RECEIVE_CARDS } from '../actions/cards'
import card from './card'

export default function cards(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, card(undefined, action)]

    case RECEIVE_CARDS:
      return state.concat(action.cards)

    case SHOW_CARD:
      return state.map(_card =>
        card(_card, action)
      )

    case HIDE_CARD:
      return state.map(_card =>
        card(_card, action)
      )

    default:
      return state
  }
}
