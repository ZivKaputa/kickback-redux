import { combineReducers } from 'redux'
import data from './data.js'
import scrollPosition from './scrollPosition.js'

const queue = combineReducers({
  data,
  scrollPosition,
})

export default queue