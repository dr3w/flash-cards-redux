import React, { Component } from 'react'
import { PageHeader }  from 'react-bootstrap';

class Header extends Component {
  render() {
    const { push } = this.props

    return (
      <div>
        <PageHeader onClick={push.bind(null, "/")}>
          Flash Card App
        </PageHeader>
      </div>
    )
  }
}

export default Header
