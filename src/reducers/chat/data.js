import { CHAT_INVALIDATE_RESULTS } from '../../actions/chat/invalidateChat.js'
import { CHAT_RECEIVE_RESULTS } from '../../actions/chat/receiveChat.js'
import { CHAT_REQUEST_RESULTS } from '../../actions/chat/requestChat.js'

const DEFAULT_STATE = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: 0,
  lastRequestedAt: 0,
  lastSuccesfullyRequestedAt: 0,
  items: []
}

export default function chat(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CHAT_INVALIDATE_RESULTS:
      return {...state, didInvalidate: true}
    case CHAT_RECEIVE_RESULTS:
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
    case CHAT_REQUEST_RESULTS:
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