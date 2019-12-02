import fetchItems from './fetchItems.js'
import deleteItemLocally from './deleteItemLocally.js'

export default function deleteItem(deleteItemId) {
  return function(dispatch, getState) {

    const deletedTrack = getState().queue.data.items[deleteItemId]
    let DELETE_URL = `https://frabric.herokuapp.com/delete_song/?song_id=${deletedTrack.song_id}`

    dispatch(deleteItemLocally(deleteItemId))

    fetch(DELETE_URL).then(
      error => console.log('An error occurred.', error)
    ).then(response => {
      dispatch(fetchItems())
    })

  }
}