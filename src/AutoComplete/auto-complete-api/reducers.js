import { handleActions } from 'redux-actions'
import { actions } from './actions'

const {
  fetchResults
} = actions

const defaultState = {
  fetching: true,
  found: false
}

const handleResults = (state, action) => ({
  ...state,
  fetching: false,
  found: true,
  searchResults: action.payload
})

// TODO add reducers for non happy paths
// const handleInvalidToken = (state, action) => ({
//   ...state,
//   fetching: false,
//   found: false,
//   invalidToken: true
// })

const reducers = handleActions({
  [fetchResults]: handleResults
}, defaultState)

export default reducers
