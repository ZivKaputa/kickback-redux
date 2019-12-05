export const CHAT_RECEIVE_RESULTS = 'CHAT_RECEIVE_RESULTS'

export default function receiveChat(requestedAt, items) {
  return {
    type: CHAT_RECEIVE_RESULTS,
    items,
    requestedAt,
    receivedAt: Date.now()
  }
}