import { combineReducers } from 'redux'
import search from './search'
import queue from './queue'
import session from './session'
import user from './user'
import tab from './tab'
import menu from './menu'
import chat from './chat'
import spotify from './spotify'

const rootReducer = combineReducers({
  search,
  queue,
  session,
  user,
  tab,
  menu,
  chat,
  spotify
})

export default rootReducer