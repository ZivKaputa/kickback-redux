export const TAB_UPDATE_CURRENT = 'TAB_UPDATE_CURRENT'

export default function updateCurrent(currentTab) {
  return {
    type: TAB_UPDATE_CURRENT,
    currentTab
  }
}