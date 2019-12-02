export const QUEUE_UPDATE_SCROLL_POSITION = 'QUEUE_UPDATE_SCROLL_POSITION'

export default function updateScrollPosition(scrollPosition) {
  return {
    type: QUEUE_UPDATE_SCROLL_POSITION,
    scrollPosition
  }
}