import { combineReducers } from 'redux'
import isOpen from './isOpen.js'
import currentView from './currentView.js'

const menu = combineReducers({
  isOpen,
  currentView
})

export default menu