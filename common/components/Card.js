import React, { Component, PropTypes } from 'react'

class Card extends Component {
  render() {
    const { title, onClick } = this.props
    return (
      <li onClick={onClick}>{title}</li>
    )
  }
}

export default Card
