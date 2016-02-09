import { ADD_CARD, SHOW_CARD } from '../actions/cards'

export default function card(state, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...action.card,
        id: Date.now()
      }

    case SHOW_CARD:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        title: state.title + "!"
      }

    default:
      return state
  }
}
