import { combineReducers } from 'redux'
import id from './id.js'
import session from './session.js'

const user = combineReducers({
  id,
  session
})

export default user