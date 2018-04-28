import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }


  render () {
    return (
      <header> 
       <div className="logo"> LOGO </div>

       <nav>
        <a href = "#"> home </a>
        <a href = "#"> about us </a>
        <a href = "#"> login </a>
        <a href = "#" className ="register-btn"> Register </a>

      </nav>
        
      </header>
    )
  }
}


