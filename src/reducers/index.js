import { combineReducers } from 'redux'
import search from './search'
import queue from './queue'
import session from './session'
import user from './user'
import tab from './tab'

const rootReducer = combineReducers({
  search,
  queue,
  session,
  user,
  tab
})

export default rootReducer