import { MENU_TOGGLE } from '../../actions/menu/toggleMenu.js'

const DEFAULT_STATE = false

export default function isOpen(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case MENU_TOGGLE:
      return !state
    default:
      return state
  }
}