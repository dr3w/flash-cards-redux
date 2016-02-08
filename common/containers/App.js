import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Counter from './Counter'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Counter/>
        <Footer/>
      </div>
    )
  }
}

export default App
