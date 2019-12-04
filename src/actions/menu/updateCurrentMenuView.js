export const MENU_VIEW_UPDATE_CURRENT = 'MENU_VIEW_UPDATE_CURRENT'

export default function updateCurrentMenuView(currentView) {
  return {
    type: MENU_VIEW_UPDATE_CURRENT,
    currentView
  }
}