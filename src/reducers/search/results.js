import { SEARCH_INVALIDATE_RESULTS } from '../../actions/search/invalidateResults.js'
import { SEARCH_RECEIVE_RESULTS } from '../../actions/search/receiveResults.js'
import { SEARCH_REQUEST_RESULTS } from '../../actions/search/requestResults.js'

const DEFAULT_STATE = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: 0,
  lastRequestedAt: 0,
  lastSuccesfullyRequestedAt: 0,
  items: []
}

export default function results(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SEARCH_INVALIDATE_RESULTS:
      return {...state, didInvalidate: true}
    case SEARCH_RECEIVE_RESULTS:
      if (action.requestedAt === state.lastRequestedAt) {
        return {
          ...state,
          didInvalidate: false,
          isFetching: false,
          items: action.items,
          lastUpdated: action.receivedAt,
          lastSuccesfullyRequestedAt: action.requestedAt
        }
      } else {
        return state
      }
    case SEARCH_REQUEST_RESULTS:
      return {
        ...state,
        didInvalidate: false,
        isFetching: false,
        lastRequestedAt: action.requestedAt
      }
    default:
      return state
  }
}