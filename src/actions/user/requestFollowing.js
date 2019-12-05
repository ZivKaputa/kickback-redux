export const FOLLOWING_REQUEST_RESULTS = 'FOLLOWING_REQUEST_RESULTS'

export default function requestFollowing(requestedAt) {
  return {
    type: FOLLOWING_REQUEST_RESULTS,
    requestedAt
  }
}