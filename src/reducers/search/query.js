import { SEARCH_REQUEST_RESULTS } from '../../actions/search/requestResults.js'
import { SEARCH_UPDATE_QUERY } from '../../actions/search/updateQuery.js'

const DEFAULT_STATE = ''

export default function query(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SEARCH_UPDATE_QUERY:
    case SEARCH_REQUEST_RESULTS:
      return action.query
    default:
      return state
  }
}