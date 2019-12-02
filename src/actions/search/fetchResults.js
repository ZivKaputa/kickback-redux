import requestResults from './requestResults.js'
import receiveResults from './receiveResults.js'
import updateScrollPosition from './updateScrollPosition.js'

export default function fetchResults(query) {
  return function(dispatch) {

    let requestedAt = Date.now()
    dispatch(requestResults(query, requestedAt))

    if (query === "") {
      dispatch(receiveResults(query, requestedAt, []))
      dispatch(updateScrollPosition(0))
      return
    }

    return fetch(`https://frabric.herokuapp.com/search/?q=${query}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        dispatch(receiveResults(query, requestedAt, json))
        dispatch(updateScrollPosition(0))
      })
  }
}