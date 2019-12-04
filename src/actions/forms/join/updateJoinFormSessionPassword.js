export const UPDATE_JOIN_FORM_SESSION_PASSWORD = 'UPDATE_JOIN_FORM_SESSION_PASSWORD'

export default function updateJoinFormSessionPassword(newSessionPassword) {
  return {
    type: UPDATE_JOIN_FORM_SESSION_PASSWORD,
    newSessionPassword
  }
}