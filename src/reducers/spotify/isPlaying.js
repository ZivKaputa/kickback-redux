import { UPDATE_IS_PLAYING } from '../../actions/spotify/updateIsPlaying.js'

const DEFAULT_STATE = false

export default function isPlaying(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_IS_PLAYING:
      return action.isPlaying
    default:
      return state
  }
}