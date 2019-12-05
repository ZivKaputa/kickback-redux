export const UPDATE_USER_OWNED_SESSION_LOCALLY = 'UPDATE_USER_OWNED_SESSION_LOCALLY'

export default function updateUserOwnedSessionLocally(sessionID, sessionName) {
  return {
    type: UPDATE_USER_OWNED_SESSION_LOCALLY,
    sessionID,
    sessionName
  }
}