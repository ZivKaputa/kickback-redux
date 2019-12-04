import { combineReducers } from 'redux'
import isOpen from './isOpen.js'
import currentView from './currentView.js'
import formInfo from './formInfo.js'

const menu = combineReducers({
  isOpen,
  currentView,
  formInfo
})

export default menu