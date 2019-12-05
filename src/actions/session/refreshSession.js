import fetchItems from '../queue/fetchItems'
import updateUserOwnedSession from '../user/updateUserOwnedSession'
import fetchChat from '../chat/fetchChat'

export default function refreshSession() {
  return function(dispatch, getState) {
      dispatch(fetchItems())
      dispatch(updateUserOwnedSession())
      dispatch(fetchChat())
  }
}