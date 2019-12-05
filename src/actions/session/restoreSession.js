import localforage from 'localforage'
import updateSession from './updateSession'

export default function restoreSession() {
  return function(dispatch, getState) {
    localforage.getItem('kb-session').then(sessionInfo => {
      dispatch(updateSession(sessionInfo.id, sessionInfo.name))
    })
  }
}