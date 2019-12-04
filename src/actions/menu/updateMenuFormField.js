export const UPDATE_MENU_FORM_FIELD = 'UPDATE_MENU_FORM_FIELD'

export default function updateMenuFormField(field, newVal) {
  return {
    type: UPDATE_MENU_FORM_FIELD,
    field,
    newVal
  }
}