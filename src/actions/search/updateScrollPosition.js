export const SEARCH_UPDATE_SCROLL_POSITION = 'SEARCH_UPDATE_SCROLL_POSITION'

export default function updateScrollPosition(scrollPosition) {
  return {
    type: SEARCH_UPDATE_SCROLL_POSITION,
    scrollPosition
  }
}