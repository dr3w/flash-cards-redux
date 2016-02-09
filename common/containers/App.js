import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import CardList from './CardList'
import AddCard from './AddCard'
import Modal from './Modal'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/base.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AddCard/>
        <CardList/>
        <Modal/>
        <Footer/>
      </div>
    )
  }
}

export default App
