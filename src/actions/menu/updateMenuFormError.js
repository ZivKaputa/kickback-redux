export const UPDATE_MENU_FORM_ERROR = 'UPDATE_MENU_FORM_ERROR'

export default function updateMenuFormError(newError) {
  return {
    type: UPDATE_MENU_FORM_ERROR,
    newError
  }
}