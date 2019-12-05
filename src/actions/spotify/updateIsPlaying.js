export const UPDATE_IS_PLAYING = 'UPDATE_IS_PLAYING'

export default function updateIsPlaying(isPlaying) {
  return {
    type: UPDATE_IS_PLAYING,
    isPlaying
  }
}