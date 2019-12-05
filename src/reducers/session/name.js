import { UPDATE_SESSION_LOCALLY } from '../../actions/session/updateSessionLocally.js'

const DEFAULT_STATE = null

export default function name(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_SESSION_LOCALLY:
      return action.newSessionName
    default:
      return state
  }
}