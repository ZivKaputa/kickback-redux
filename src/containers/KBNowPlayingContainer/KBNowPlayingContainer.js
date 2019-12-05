import { connect } from 'react-redux'
import KBNowPlaying from '../../components/KBNowPlaying'
import updateIsPlaying from '../../actions/spotify/updateIsPlaying'
import skipSong from '../../actions/spotify/skipSong'

const mapStateToProps = state => {
  var item = null
  if (state.queue.data.items && state.queue.data.items.length > 0) {
    item = state.queue.data.items[0]
  }

  let isAdmin = (state.user.session.id && (state.user.session.id === state.session.id))

  return {
    item,
    isAdmin,
    isPlaying: state.spotify.isPlaying
  }
}

const mapDispatchToProps = dispatch => {
  return {
    play: () => {
      dispatch(updateIsPlaying(true))
    },
    pause: () => {
      dispatch(updateIsPlaying(false))
    },
    skipSong: () => {
      dispatch(skipSong())
    }
  }
}

const KBNowPlayingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBNowPlaying)

export default KBNowPlayingContainer