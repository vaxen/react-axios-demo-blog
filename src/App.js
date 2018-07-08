import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Blog from './containers/Blog/Blog'

class App extends Component {
  render () {
    return (
      <BrowserRouter basename='/react-axios-demo-blog'>
        <div className='App'>
          <Blog />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
