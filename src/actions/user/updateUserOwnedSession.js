import updateUserOwnedSessionLocally from './updateUserOwnedSessionLocally'

function safeNull(obj) {
  if (!obj) {
    return null
  }
  return obj
}

export default function updateUserOwnedSession() {
  return function(dispatch, getState) {
    const URL = `https://frabric.herokuapp.com/get_owned_session?owner=${getState().user.id}`

    fetch(URL).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(json => {
      dispatch(updateUserOwnedSessionLocally(safeNull(json.session_id), safeNull(json.session_name)))
    })
  }
}