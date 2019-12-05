import fetchItems from '../queue/fetchItems'
import updateUserOwnedSession from '../user/updateUserOwnedSession'

export default function refreshSession() {
  return function(dispatch, getState) {
      dispatch(fetchItems())
      dispatch(updateUserOwnedSession())
  }
}