export const UPDATE_JOIN_FORM_SESSION_ID = 'UPDATE_JOIN_FORM_SESSION_ID'

export default function updateJoinFormSessionID(newSessionID) {
  return {
    type: UPDATE_JOIN_FORM_SESSION_ID,
    newSessionID
  }
}