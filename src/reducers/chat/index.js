import { combineReducers } from 'redux'
import isOpen from './isOpen.js'
import data from './data.js'
import inputText from './inputText.js'

const chat = combineReducers({
  isOpen,
  data,
  inputText
})

export default chat