import { connect } from 'react-redux'
import updateAccessTokenLocally from '../../actions/spotify/updateAccessTokenLocally'
import KBSpotifyManager from '../../components/KBSpotifyManager'
import skipSong from '../../actions/spotify/skipSong'
import updateIsPlaying from '../../actions/spotify/updateIsPlaying'

const mapStateToProps = state => {
  return {
    accessToken: state.spotify.accessToken,
    playerActive: (state.user.session.id && (state.user.session.id === state.session.id)),
    currentTrack: (state.queue.data.items.length > 0) ? {uri: ('spotify:track:' + state.queue.data.items[0].uri), id: state.queue.data.items[0].song_id} : null,
    isPlaying: state.spotify.isPlaying
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAccessToken: accessToken => {
      dispatch(updateAccessTokenLocally(accessToken))
    },
    skipSong: () => {
      dispatch(skipSong())
    },
    setPaused: () => {
      dispatch(updateIsPlaying(false))
    }
  }
}

const KBSpotifyManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBSpotifyManager)

export default KBSpotifyManagerContainer