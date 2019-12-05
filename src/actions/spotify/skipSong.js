import fetchItems from '../queue/fetchItems'

export default function skipSong() {
  return function(dispatch, getState) {

    return fetch(`https://frabric.herokuapp.com/play_next_song/?session_id=${getState().session.id}`)
      .then(response => {
        dispatch(fetchItems())
        return response
      })
  }
}