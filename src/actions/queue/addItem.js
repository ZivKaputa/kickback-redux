import fetchItems from './fetchItems.js'
import addItemLocally from './addItemLocally.js'

export default function addItem(uri) {
  return function(dispatch, getState) {

    let ADD_URL = `https://frabric.herokuapp.com/add_song/?session_id=${getState().session.id}&uri=${uri}&user_id=${getState().user.id}`

    // dispatch(addItemLocally(uri)) Currently requires all song info

    fetch(ADD_URL).then(
      error => console.log('An error occurred.', error)
    ).then(response => {
      dispatch(fetchItems())
    })

  }
}