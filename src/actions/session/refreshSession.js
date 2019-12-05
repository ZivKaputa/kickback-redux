import fetchItems from '../queue/fetchItems'

export default function refreshSession() {
  return function(dispatch, getState) {
      dispatch(fetchItems())
  }
}