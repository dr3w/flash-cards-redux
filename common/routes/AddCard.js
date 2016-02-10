import React, { Component } from 'react'
import Header from './../containers/Header'
import Footer from './../containers/Footer'
import AddCard from './../containers/AddCard'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/base.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AddCard/>
        <Footer/>
      </div>
    )
  }
}

export default App
