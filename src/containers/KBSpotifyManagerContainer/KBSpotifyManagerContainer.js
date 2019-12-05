import { connect } from 'react-redux'
import updateAccessTokenLocally from '../../actions/spotify/updateAccessTokenLocally'
import KBSpotifyManager from '../../components/KBSpotifyManager'

const mapStateToProps = state => {
  return {
    accessToken: state.spotify.accessToken,
    playerActive: (state.user.session.id && (state.user.session.id === state.session.id)),
    currentTrack: (state.queue.data.items.length > 0) ? {uri: ('spotify:track:' + state.queue.data.items[0].uri), id: state.queue.data.items[0].song_id} : null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAccessToken: accessToken => {
      dispatch(updateAccessTokenLocally(accessToken))
    }
  }
}

const KBSpotifyManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBSpotifyManager)

export default KBSpotifyManagerContainer