import { UPDATE_USER } from '../../actions/user/updateUser.js'

const DEFAULT_STATE = 'fako'

export default function updateUser(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.newUserId
    default:
      return state
  }
}