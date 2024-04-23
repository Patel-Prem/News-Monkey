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
        <News exact path ="/" pageSize={15} country={'us'} category={'general'}/>
      </div>
    )
  }
}

export default App