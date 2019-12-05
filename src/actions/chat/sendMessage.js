import fetchChat from './fetchChat.js'
import updateChatInputText from './updateChatInputText'

export default function sendMessage() {
  return function(dispatch, getState) {

    let userId = getState().user.id ? getState().user.id : 'Guest'
    let sessionId = getState().session.id
    let message = getState().chat.inputText
    let ADD_URL = `https://frabric.herokuapp.com/add_to_chat/?session_id=${sessionId}&username=${userId}&message=${message}`

    // dispatch(addTOCHATLocally(uri)) TOO LAZY TO DO THIS RN

    fetch(ADD_URL).then(
      error => console.log('An error occurred.', error)
    ).then(response => {
      dispatch(fetchChat())
      dispatch(updateChatInputText(''))
    })

  }
}