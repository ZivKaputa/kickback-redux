import { CHAT_TOGGLE } from '../../actions/chat/toggleChat.js'

const DEFAULT_STATE = false

export default function isOpen(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CHAT_TOGGLE:
      return !state
    default:
      return state
  }
}