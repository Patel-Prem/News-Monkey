import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import ReactPaginate from 'react-paginate';
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
        <News pageSize={15} country={'us'} category={'science'}/>
      </div>
    )
  }
}

export default App
