import { SHOW_CARD } from '../actions/cards'

export default function card(state, action) {
  switch (action.type) {
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
