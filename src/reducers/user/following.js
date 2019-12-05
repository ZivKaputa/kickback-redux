import { FOLLOWING_INVALIDATE_RESULTS } from '../../actions/user/invalidateFollowing.js'
import { FOLLOWING_RECEIVE_RESULTS } from '../../actions/user/receiveFollowing.js'
import { FOLLOWING_REQUEST_RESULTS } from '../../actions/user/requestFollowing.js'

const DEFAULT_STATE = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: 0,
  lastRequestedAt: 0,
  lastSuccesfullyRequestedAt: 0,
  items: []
}

export default function following(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FOLLOWING_INVALIDATE_RESULTS:
      return {...state, didInvalidate: true}
    case FOLLOWING_RECEIVE_RESULTS:
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
    case FOLLOWING_REQUEST_RESULTS:
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