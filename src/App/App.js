import React, { Component } from 'react'
import AutoComplete from '../AutoComplete/AutoCompleteContainer'

class App extends Component {
  render () {
    return (
      <div className='auto-complete-container'>
        <h1>Where are you going?</h1>
        <label>Pick up location</label>
        <AutoComplete
          maxResults={6}
        />
      </div>
    )
  }
}

export default App
