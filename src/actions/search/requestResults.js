export const SEARCH_REQUEST_RESULTS = 'SEARCH_REQUEST_RESULTS'

export default function requestResults(query, requestedAt) {
  return {
    type: SEARCH_REQUEST_RESULTS,
    query,
    requestedAt
  }
}