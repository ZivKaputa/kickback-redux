import fetchFollowing from './fetchFollowing'

export default function followUser(following) {
  return function(dispatch, getState) {

    return fetch(`https://frabric.herokuapp.com/follow_user/?follower=${getState().user.id}&following=${following}`)
      .then(response => {
        dispatch(fetchFollowing())
        return response
      })
  }
}