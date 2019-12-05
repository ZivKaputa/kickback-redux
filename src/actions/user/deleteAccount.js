import updateUserOwnedSessionLocally from './updateUserOwnedSessionLocally'
import updateSession from '../session/updateSession'

export default function deleteAccount() {
  return function(dispatch, getState) {

    let DELETE_URL = `https://frabric.herokuapp.com/delete_user?=${getState().user.session.id}`

    fetch(DELETE_URL).then(response => {
      if (response.ok) {
        if (getState().session.id === getState().user.session.id) {
          dispatch(updateSession(null, null))
        }
        dispatch(updateUserOwnedSessionLocally(null, null))
      }
    })

  }
}