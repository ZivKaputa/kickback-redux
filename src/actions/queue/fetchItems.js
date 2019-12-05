import requestItems from './requestItems.js'
import receiveItems from './receiveItems.js'
import updateScrollPosition from './updateScrollPosition.js'

export default function fetchItems() {
  return function(dispatch, getState) {

    let sessionId = getState().session.id
    let requestedAt = Date.now()
    dispatch(requestItems(sessionId, requestedAt))

    if (!sessionId || sessionId === "") {
      dispatch(receiveItems(sessionId, requestedAt, []))
      dispatch(updateScrollPosition(0))
      return
    }

    return fetch(`https://frabric.herokuapp.com/get_queue/?session_id=${sessionId}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        dispatch(receiveItems(sessionId, requestedAt, json))
        dispatch(updateScrollPosition(0))
      })
  }
}