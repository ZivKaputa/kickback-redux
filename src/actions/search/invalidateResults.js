export const SEARCH_INVALIDATE_RESULTS = 'SEARCH_INVALIDATE_RESULTS'

export default function invalidateResults() {
  return {
    type: SEARCH_INVALIDATE_RESULTS,
  }
}