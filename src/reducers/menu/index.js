import { combineReducers } from 'redux'
import isOpen from './isOpen.js'

const menu = combineReducers({
  isOpen
})

export default menu