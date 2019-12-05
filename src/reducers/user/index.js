import { combineReducers } from 'redux'
import id from './id.js'
import session from './session.js'
import following from './following.js'

const user = combineReducers({
  id,
  session,
  following
})

export default user