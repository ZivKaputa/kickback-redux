import { combineReducers } from 'redux'
import isOpen from './isOpen.js'
import data from './data.js'

const chat = combineReducers({
  isOpen,
  data
})

export default chat