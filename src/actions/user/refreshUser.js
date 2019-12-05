import updateUserOwnedSession from './updateUserOwnedSession'
import fetchFollowing from './fetchFollowing'

export default function refreshUser() {
  return function(dispatch, getState) {
      dispatch(updateUserOwnedSession())
      dispatch(fetchFollowing())
  }
}