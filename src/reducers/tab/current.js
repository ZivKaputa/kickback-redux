import { TAB_UPDATE_CURRENT } from '../../actions/tab/updateCurrent.js'

export const tabs = {
  SEARCH: 'search',
  QUEUE: 'queue',
  NOW_PLAYING: 'now_playing'
}

const DEFAULT_STATE = tabs.QUEUE

export default function current(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TAB_UPDATE_CURRENT:
      return action.currentTab
    default:
      return state
  }
}