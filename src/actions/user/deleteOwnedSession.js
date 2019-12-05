import updateUserOwnedSessionLocally from './updateUserOwnedSessionLocally'
import updateSession from '../session/updateSession'

export default function deleteOwnedSession() {
  return function(dispatch, getState) {

    let DELETE_URL = `https://frabric.herokuapp.com/end_session?session_id=${getState().user.session.id}`

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