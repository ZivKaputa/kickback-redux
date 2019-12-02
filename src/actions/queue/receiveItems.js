export const QUEUE_RECEIVE_ITEMS = 'QUEUE_RECEIVE_ITEMS'

export default function receiveItems(sessionId, requestedAt, items) {
  return {
    type: QUEUE_RECEIVE_ITEMS,
    items,
    requestedAt,
    receivedAt: Date.now()
  }
}