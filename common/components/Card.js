import React, { Component, PropTypes } from 'react'
import { ListGroupItem } from 'react-bootstrap'

class Card extends Component {
  render() {
    const { title, onClick } = this.props
    return (
      <ListGroupItem onClick={onClick}>{title}</ListGroupItem>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Card
