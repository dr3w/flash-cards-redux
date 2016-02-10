import React, { Component, PropTypes } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import Card from './Card';

class CardList extends Component {
  render() {
    const { cards, show, push } = this.props
    if (!cards.length) {
      return (<div>Loading...</div>)
    }

    return (
      <div>
        <div className="button-section button-section-top">
          <Button bsStyle="primary" onClick={push.bind(null, "/add")}>
            Add Card
          </Button>
        </div>
        <ListGroup>
          {cards.map(card =>
            <Card
              key={card.id}
              {...card}
              onClick={() => show(card.id)}
            />
          )}
        </ListGroup>
      </div>
    )
  }
}

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  show: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
}

export default CardList
