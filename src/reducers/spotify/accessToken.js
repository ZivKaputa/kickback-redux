import { UPDATE_ACCESS_TOKEN_LOCALLY } from '../../actions/spotify/updateAccessTokenLocally.js'

const DEFAULT_STATE = null

export default function accessToken(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_ACCESS_TOKEN_LOCALLY:
      return action.newAccessToken
    default:
      return state
  }
}