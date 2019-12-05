export const UPDATE_SESSION_LOCALLY = 'UPDATE_SESSION_LOCALLY'

export default function updateSessionLocally(newSessionID, newSessionName) {
  return {
    type: UPDATE_SESSION_LOCALLY,
    newSessionID,
    newSessionName
  }
}