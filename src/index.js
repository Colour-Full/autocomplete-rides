import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/App'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './root-reducer'

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware
  )
)

const initialState = {
  SearchService: {
    // This can be set as env var but for the needs of the test I am passing it directly
    searchServiceUrl: 'https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows={number_of_results_required}&solrTerm={search_term}'
  }
}

export const store = createStore(rootReducer, initialState, enhancer)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'))
