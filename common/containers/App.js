import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import CardList from './CardList'
import AddCard from './AddCard'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/base.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AddCard/>
        <CardList/>
        <Footer/>
      </div>
    )
  }
}

export default App
