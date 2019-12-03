import { combineReducers } from 'redux'
import isOpen from './isOpen.js'

const chat = combineReducers({
  isOpen
})

export default chat