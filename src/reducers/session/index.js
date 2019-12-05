import { combineReducers } from 'redux'
import id from './id.js'
import name from './name.js'

const session = combineReducers({
  id,
  name
})

export default session