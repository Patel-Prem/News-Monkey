import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
export class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoading: false,
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <News exact path="/" pageSize={12} country={'us'} category={'science'}/>
      </div>
    )
  }
}

export default App
