import { combineReducers } from 'redux'
import AutoComplete from './AutoComplete/auto-complete-api/reducers'

// We can use this to set some default service info as env vars
const SearchService = (state = {}) => (state)

const rootReducer = combineReducers({
  SearchService,
  AutoComplete
})

export default rootReducer
