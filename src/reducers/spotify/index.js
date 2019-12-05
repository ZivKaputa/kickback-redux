import { combineReducers } from 'redux'
import accessToken from './accessToken.js'
import isPlaying from './isPlaying.js'

const spotify = combineReducers({
  accessToken,
  isPlaying
})

export default spotify