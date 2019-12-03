import { combineReducers } from 'redux'
import search from './search'
import queue from './queue'
import session from './session'
import user from './user'
import tab from './tab'
import menu from './menu'
import chat from './chat'

const rootReducer = combineReducers({
  search,
  queue,
  session,
  user,
  tab,
  menu,
  chat
})

export default rootReducer