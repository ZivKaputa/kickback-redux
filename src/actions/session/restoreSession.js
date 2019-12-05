import localforage from 'localforage'
import updateSession from './updateSession'

export default function restoreSession() {
  return function(dispatch, getState) {
    localforage.getItem('kb-session').then(sessionInfo => {
      if (sessionInfo && sessionInfo.id && sessionInfo.name) {
          dispatch(updateSession(sessionInfo.id, sessionInfo.name))
      }
    })
  }
}