import {
  buildUrl,
  getJSON,
  extractJSON
} from './utils'

export { buildUrl, extractJSON }

const boundGetJSON = getJSON(fetch)

export {
  boundGetJSON as getJSON
}
