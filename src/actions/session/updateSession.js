import localforage from 'localforage'
import updateSessionLocally from './updateSessionLocally'
import refreshSession from './refreshSession'

export default function updateSession(newSessionID, newSessionName) {
  return function(dispatch, getState) {

    localforage.setItem('kb-session', {id: newSessionID, name: newSessionName}).then(() => {
      return localforage.getItem('kb-session')
    }).then(sessionInfo => {
      dispatch(updateSessionLocally(sessionInfo.id, sessionInfo.name))
      dispatch(refreshSession())
    })

  }
}