import React, { Component, PropTypes } from 'react'
import { ListGroup } from 'react-bootstrap'
import Card from './Card';

class CardList extends Component {
  render() {
    const { cards, show } = this.props
    if (!cards.length) {
      return (<div>Loading...</div>)
    }

    return (
      <ListGroup>
        {cards.map(card =>
          <Card
            key={card.id}
            {...card}
            onClick={() => show(card.id)}
          />
        )}
      </ListGroup>
    )
  }
}

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  show: PropTypes.func.isRequired
}

export default CardList
