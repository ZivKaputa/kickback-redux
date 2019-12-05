import { CHAT_UPDATE_INPUT_TEXT } from '../../actions/chat/updateChatInputText.js'

const DEFAULT_STATE = ''

export default function inputText(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CHAT_UPDATE_INPUT_TEXT:
      return action.newText
    default:
      return state
  }
}