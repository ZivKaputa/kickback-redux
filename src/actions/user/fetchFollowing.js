import requestFollowing from './requestFollowing.js'
import receiveFollowing from './receiveFollowing.js'

export default function fetchFollowing() {
  return function(dispatch, getState) {

    let requestedAt = Date.now()
    dispatch(requestFollowing(requestedAt))

    if (!getState().user.id) {
      dispatch(receiveFollowing(requestedAt, []))
    }

    return fetch(`https://frabric.herokuapp.com/get_following/?username=${getState().user.id}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        dispatch(receiveFollowing(requestedAt, json))
      })
  }
}