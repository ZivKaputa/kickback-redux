export const UPDATE_USER = 'UPDATE_USER'

export default function updateUser(newUserId) {
  return {
    type: UPDATE_USER,
    newUserId
  }
}