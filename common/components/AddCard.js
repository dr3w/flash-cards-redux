import React, { Component, PropTypes } from 'react'
import { Button, ButtonInput, Input } from 'react-bootstrap'

class AddCard extends Component {
  onSubmit(e) {
    e.preventDefault()

    const { add } = this.props

    const { nodeTitle, nodeFront, nodeBack } = this.getNodes()

    add({
      title: nodeTitle.value.trim() || "",
      front: nodeFront.value.trim() || "",
      back: nodeBack.value.trim() || ""
    })

    this.clearNodes()
  }

  onCancel() {
    const { push } = this.props

    this.clearNodes()

    push('/')
  }

  getNodes() {
    // Input is an instance of ReactCompositeComponentWrapper, thus refs look so strange
    const nodeTitle = this.refs.title.refs.input
    const nodeFront = this.refs.front.refs.input
    const nodeBack = this.refs.back.refs.input

    return {nodeTitle, nodeFront, nodeBack}
  }

  clearNodes() {
    const nodes = this.getNodes()

    Object.keys(nodes).map(key => nodes[key].value = "")
  }


  render() {
    // TODO: use textarea for front and back
    // TODO: ? save input values in state

    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <Input type="text" ref="title" placeholder="Title" required/>
          <Input type="text" ref="front" placeholder="Front"/>
          <Input type="text" ref="back" placeholder="Back"/>
          <div className="button-section button-section-input">
            <ButtonInput value="Cancel" onClick={this.onCancel.bind(this)}/>
            <ButtonInput bsStyle="primary" type="submit" value="Add"/>
          </div>
        </form>
      </div>
    )
  }
}

AddCard.propTypes = {
  add: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
}

export default AddCard
