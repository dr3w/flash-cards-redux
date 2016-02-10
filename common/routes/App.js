import React, { Component } from 'react'
import Header from './../containers/Header'
import Footer from './../containers/Footer'
import CardList from './../containers/CardList'
import Modal from './../containers/Modal'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/base.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CardList/>
        <Modal/>
        <Footer/>
      </div>
    )
  }
}

export default App
