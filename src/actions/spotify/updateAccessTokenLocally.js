export const UPDATE_ACCESS_TOKEN_LOCALLY = 'UPDATE_ACCESS_TOKEN_LOCALLY'

export default function updateAccessTokenLocally(newAccessToken) {
  return {
    type: UPDATE_ACCESS_TOKEN_LOCALLY,
    newAccessToken
  }
}