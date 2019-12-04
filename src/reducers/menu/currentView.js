import { MENU_VIEW_UPDATE_CURRENT } from '../../actions/menu/updateCurrentMenuView.js'

export const views = {
  PRIMARY: 'primary',
  LOGIN: 'login',
  SIGN_UP: 'sign_up',
  JOIN: 'join',
  CREATE: 'create',
  ADD_FOLLOWER: 'add_follower'
}

const DEFAULT_STATE = views.PRIMARY

export default function currentView(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case MENU_VIEW_UPDATE_CURRENT:
      return action.currentView
    default:
      return state
  }
}