import { ADD_CARD, SHOW_CARD, HIDE_CARD } from '../actions/cards'

export default function card(state, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...action.card,
        id: Date.now()
      }

    case SHOW_CARD:
      return {
        ...state,
        current: (state.id === action.id)
      }

    case HIDE_CARD:
      return {
        ...state,
        current: false
      }

    default:
      return state
  }
}
