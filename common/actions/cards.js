import cardsApi from '../api/cards'
export const ADD_CARD = 'ADD_CARD'
export const SHOW_CARD = 'SHOW_CARD'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'

export function add(value) {
  return {
    type: ADD_CARD,
    value
  }
}

export function show(id) {
  return {
    type: SHOW_CARD,
    id
  }
}

export function receiveReceive(cards) {
  return {
    type: RECEIVE_CARDS,
    cards
  }
}

export function getAllCards() {
  return dispatch => {
    cardsApi.getCards()
      .then(cards => {
        dispatch(receiveReceive(cards))
      })
  }
}
