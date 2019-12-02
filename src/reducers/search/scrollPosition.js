import { SEARCH_UPDATE_SCROLL_POSITION } from '../../actions/search/updateScrollPosition.js'

const DEFAULT_STATE = 0

export default function scrollPosition(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SEARCH_UPDATE_SCROLL_POSITION:
      return action.scrollPosition
    default:
      return state
  }
}