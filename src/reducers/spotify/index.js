import { combineReducers } from 'redux'
import accessToken from './accessToken.js'

const spotify = combineReducers({
  accessToken
})

export default spotify