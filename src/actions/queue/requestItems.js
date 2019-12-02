export const QUEUE_REQUEST_ITEMS = 'QUEUE_REQUEST_ITEMS'

export default function requestItems(sessionId, requestedAt) {
  return {
    type: QUEUE_REQUEST_ITEMS,
    sessionId,
    requestedAt
  }
}