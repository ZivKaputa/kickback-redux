export const CHAT_REQUEST_RESULTS = 'CHAT_REQUEST_RESULTS'

export default function requestChat(requestedAt) {
  return {
    type: CHAT_REQUEST_RESULTS,
    requestedAt
  }
}