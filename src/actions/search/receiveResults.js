export const SEARCH_RECEIVE_RESULTS = 'SEARCH_RECEIVE_RESULTS'

export default function receiveResults(query, requestedAt, items) {
  return {
    type: SEARCH_RECEIVE_RESULTS,
    items,
    requestedAt,
    receivedAt: Date.now()
  }
}