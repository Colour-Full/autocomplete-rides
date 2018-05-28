import { pipe } from '../../async-fp'
import curry from 'lodash/curry'

import { createAction } from 'redux-actions'
import { buildUrl, getJSON, extractJSON } from './api-utils'

const namespace = 'auto-complete-action'

export const actions = {
  fetchResults: createAction(`${namespace}/found`)
  // TODO handle actions for non happy paths
  // serviceUnavailable: createAction(`${namespace}/serviceUnavilable`),
  // unknownError: createAction(`${namespace}/unknownError`),
  // unableToUpdate: createAction(`${namespace}/unableToUpdate`)
}

export const determineFetchAction = async (response) => {
  if (response.ok) return actions.fetchResults(await extractJSON(response))
  // TODO handle actions for non happy paths
  // switch (response.status) {
  // case status.NOT_FOUND:
  //   return actions.fetchInvalidToken()
  // case status.SERVICE_UNAVAILABLE:
  //   return actions.serviceUnavailable()
  //   default:
  //     return actions.unknownError()
  // }
}

export const dispatchAction = curry(
  (dispatch, action) => {
    return dispatch(action)
  }
)

export const fetchSearchResults = curry(
  (urlTemplate, maxResults, searchTerm) => {
    return async (dispatch) => {
      pipe(
        buildUrl(urlTemplate, maxResults),
        getJSON,
        determineFetchAction,
        dispatchAction(dispatch)
      )(searchTerm)
    }
  }
)

