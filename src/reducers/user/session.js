import { UPDATE_USER_OWNED_SESSION_LOCALLY } from '../../actions/user/updateUserOwnedSessionLocally.js'

const DEFAULT_STATE = {id: null, name: null}

export default function session(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_USER_OWNED_SESSION_LOCALLY:
      return {id: action.sessionID, name: action.sessionName}
    default:
      return state
  }
}