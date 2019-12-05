import requestChat from './requestChat.js'
import receiveChat from './receiveChat.js'

export default function fetchChat() {
  return function(dispatch, getState) {

    let requestedAt = Date.now()
    dispatch(requestChat(requestedAt))

    if (!getState().session.id) {
      dispatch(receiveChat(requestedAt, []))
    }

    return fetch(`https://frabric.herokuapp.com/retrieve_chat/?session_id=${getState().session.id}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        dispatch(receiveChat(requestedAt, json))
      })
  }
}