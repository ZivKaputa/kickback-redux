import { connect } from 'react-redux'
import updateAccessTokenLocally from '../../actions/spotify/updateAccessTokenLocally'
import KBSpotifyManager from '../../components/KBSpotifyManager'

const mapStateToProps = state => {
  return {
    accessToken: state.spotify.accessToken,
    playerActive: (state.user.session.id && (state.user.session.id === state.session.id))
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