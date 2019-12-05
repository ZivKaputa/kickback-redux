export const FOLLOWING_RECEIVE_RESULTS = 'FOLLOWING_RECEIVE_RESULTS'

export default function receiveFollowing(requestedAt, items) {
  return {
    type: FOLLOWING_RECEIVE_RESULTS,
    items,
    requestedAt,
    receivedAt: Date.now()
  }
}