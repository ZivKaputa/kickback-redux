export const UPDATE_JOIN_FORM_ERROR = 'UPDATE_JOIN_FORM_ERROR'

export default function updateJoinFormError(newError) {
  return {
    type: UPDATE_JOIN_FORM_ERROR,
    newError
  }
}