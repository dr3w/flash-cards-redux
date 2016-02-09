import React, { Component, PropTypes } from 'react'

class Card extends Component {
  render() {
    const { title, onClick } = this.props
    return (
      <li onClick={onClick}>{title}</li>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Card
