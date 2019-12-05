import { UPDATE_USER_LOCALLY } from '../../actions/user/updateUserLocally.js'

const DEFAULT_STATE = null

export default function id(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_USER_LOCALLY:
      return action.newUserId
    default:
      return state
  }
}