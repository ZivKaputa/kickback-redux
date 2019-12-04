import { UPDATE_JOIN_FORM_SESSION_ID } from '../../actions/forms/join/updateJoinFormSessionID.js'
import { UPDATE_JOIN_FORM_SESSION_PASSWORD } from '../../actions/forms/join/updateJoinFormSessionPassword.js'
import { UPDATE_JOIN_FORM_ERROR } from '../../actions/forms/join/updateJoinFormError.js'
import { CLEAR_JOIN_FORM } from '../../actions/forms/join/clearJoinForm.js'

const DEFAULT_STATE = {
  sessionID: '',
  sessionPassword: '',
  error: ''
}

export default function joinForm(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_JOIN_FORM_SESSION_ID:
      return {...state, sessionID: action.newSessionID}
    case UPDATE_JOIN_FORM_SESSION_PASSWORD:
      return {...state, sessionPassword: action.newSessionPassword}
    case UPDATE_JOIN_FORM_ERROR:
      return {...state, error: action.newError}
    case CLEAR_JOIN_FORM:
      return DEFAULT_STATE
    default:
      return state
  }
}