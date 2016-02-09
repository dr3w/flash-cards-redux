import React, { Component, PropTypes } from 'react'
import Card from './Card';

class CardList extends Component {
  render() {
    const { cards, show } = this.props
    if (!cards.length) {
      return (<div>Loading...</div>)
    }

    return (
      <ul>
        {cards.map(card =>
          <Card
            key={card.id}
            {...card}
            onClick={() => show(card.id)}
          />
        )}
      </ul>
    )
  }
}

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  show: PropTypes.func.isRequired
}

export default CardList
