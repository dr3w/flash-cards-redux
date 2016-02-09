import React, { Component, PropTypes } from 'react'
import { ButtonInput, Input } from 'react-bootstrap'


class AddCard extends Component {
  onSubmit(e) {
    e.preventDefault()

    const { add } = this.props

    // Input is an instance of ReactCompositeComponentWrapper, thus refs look so strange
    const nodeTitle = this.refs.title.refs.input
    const nodeFront = this.refs.front.refs.input
    const nodeBack = this.refs.back.refs.input

    add({
      title: nodeTitle.value.trim() || "",
      front: nodeFront.value.trim() || "",
      back: nodeBack.value.trim() || ""
    })

    nodeTitle.value = ''
    nodeFront.value = ''
    nodeBack.value = ''
  }

  render() {
    return (
      <div>
        // TODO: use textarea for front and back

        <form onSubmit={(e) => this.onSubmit(e)}>
          <Input type="text" ref="title" placeholder="Title" required/>
          <Input type="text" ref="front" placeholder="Front"/>
          <Input type="text" ref="back" placeholder="Back"/>
          <ButtonInput type="submit" value="Add"/>
        </form>
      </div>
    )
  }
}

AddCard.propTypes = {
  add: PropTypes.func.isRequired
}

export default AddCard
