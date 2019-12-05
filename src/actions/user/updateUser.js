import updateUserLocally from './updateUserLocally'
import localforage from "localforage"

export default function updateUser(newUserId) {
  return function(dispatch, getState) {

    localforage.setItem('kb-username', newUserId).then(() => {
      return localforage.getItem('kb-username')
    }).then(value => {
      dispatch(updateUserLocally(newUserId))
    })

  }
}