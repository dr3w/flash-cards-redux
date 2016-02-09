import cards from './cards.json'

const TIMEOUT = 2000

export default {
  getCards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(cards), TIMEOUT)
    })
  }
}
