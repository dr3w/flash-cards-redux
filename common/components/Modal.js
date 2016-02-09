import React, { Component, PropTypes } from 'react'
import { Modal, Button } from 'react-bootstrap'

const filterActive = (cards) => {
  return cards.filter(card => card.current)[0];
}

class CardModal extends Component {
  render() {
    const { cards, hide } = this.props
    const card = filterActive(cards)

    if (!card) {
      return (<div></div>)
    }

    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>{card.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              {card.front}
            </p>
            <p className="text-italic">
              {card.back}
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => hide(card.id)}>Close</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    )
  }
}

CardModal.propTypes = {
  cards: PropTypes.array.isRequired
}

export default CardModal
