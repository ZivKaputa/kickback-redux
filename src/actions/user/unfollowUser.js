import fetchFollowing from './fetchFollowing'

export default function unfollowUser(following) {
  return function(dispatch, getState) {

    return fetch(`https://frabric.herokuapp.com/unfollow_user/?follower=${getState().user.id}&following=${following}`)
      .then(
        error => console.log('An error occurred.', error)
      )
      .then(response => {
        dispatch(fetchFollowing())
      })

  }
}