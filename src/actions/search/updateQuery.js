export const SEARCH_UPDATE_QUERY = 'SEARCH_UPDATE_QUERY'

export default function updateQuery(query) {
  return {
    type: SEARCH_UPDATE_QUERY,
    query
  }
}