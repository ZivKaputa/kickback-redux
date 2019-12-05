export const UPDATE_USER_LOCALLY = 'UPDATE_USER_LOCALLY'

export default function updateUserLocally(newUserId) {
  return {
    type: UPDATE_USER_LOCALLY,
    newUserId
  }
}