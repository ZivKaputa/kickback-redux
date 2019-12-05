import localforage from 'localforage'
import updateUser from './updateUser'

export default function restoreUser() {
  return function(dispatch, getState) {
    localforage.getItem('kb-username').then(username => {
      dispatch(updateUser(username))
    })
  }
}