import { combineReducers } from 'redux'
import query from './query.js'
import scrollPosition from './scrollPosition.js'
import results from './results.js'

const search = combineReducers({
  query,
  scrollPosition,
  results,
})

export default search