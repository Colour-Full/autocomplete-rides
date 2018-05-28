import curry from 'lodash/curry'
import isFunction from 'lodash/isFunction'

export const buildUrl = curry(
  (urlTemplate, maxResults, searchTerm) => {
    if (!maxResults || !searchTerm) return urlTemplate
    // TODO implement the url tokens as params to this function so they can be set dynamically instead of using magic strings
    // Then maybe pass the tokens as env var
    urlTemplate = urlTemplate.replace('{number_of_results_required}', maxResults.toString())
    urlTemplate = urlTemplate.replace('{search_term}', searchTerm)
    return urlTemplate
  }
)

export const getJSON = curry((fetch, url) => fetch(url, {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}))

export const extractJSON = async (response) => {
  if (!response && isFunction(response.json)) return

  try {
    const json = await response.json()
    return json
  } catch (error) {
    console.log('Extract JSON ', error) // TODO come up with a decent error message
  }
}
