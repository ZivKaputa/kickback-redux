export const CHAT_UPDATE_INPUT_TEXT = 'CHAT_UPDATE_INPUT_TEXT'

export default function updateChatInputText(newText) {
  return {
    type: CHAT_UPDATE_INPUT_TEXT,
    newText
  }
}