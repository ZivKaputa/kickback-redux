import fetchItems from './fetchItems.js'
import reorderItemsLocally from './reorderItemsLocally.js'

export default function reorderItems(fromId, toId) {
  return function(dispatch, getState) {

    let newItemsReorder = Array.from(getState().queue.data.items)
    let movedItemReorder = newItemsReorder[fromId]
    newItemsReorder.splice(fromId, 1)
    const nextItem = (toId < newItemsReorder.length) ? newItemsReorder[toId] : null

    const afterSongId = (nextItem ? nextItem.song_id : null)
    const afterSongParam = afterSongId ? ("&after_song_id=" + afterSongId) : ""
    let REORDER_URL = "https://frabric.herokuapp.com/move_song?move_song_id=" + movedItemReorder.song_id + afterSongParam

    dispatch(reorderItemsLocally(fromId, toId))

    fetch(REORDER_URL).then(
      error => console.log('An error occurred.', error)
    ).then(response => {
      dispatch(fetchItems())
    })

  }
}



