import localforage from 'localforage'
import updateSessionLocally from './updateSessionLocally'
import refreshSession from './refreshSession'
import { getSocket } from '../../utilities/socket-context'

export default function updateSession(newSessionID, newSessionName) {
  return function(dispatch, getState) {

    let socket = getSocket()

    if (getState().session.id) {
      socket.emit('leave', getState().session.id)
    }
    if (newSessionID) {
      socket.emit('join', newSessionID)
    }

    localforage.setItem('kb-session', {id: newSessionID, name: newSessionName}).then(() => {
      return localforage.getItem('kb-session')
    }).then(sessionInfo => {
      dispatch(updateSessionLocally(sessionInfo.id, sessionInfo.name))
      dispatch(refreshSession())
    })

  }
}