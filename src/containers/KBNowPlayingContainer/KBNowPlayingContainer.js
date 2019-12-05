import { connect } from 'react-redux'
import KBNowPlaying from '../../components/KBNowPlaying'

const mapStateToProps = state => {
  var item = null
  if (state.queue.data.items && state.queue.data.items.length > 0) {
    item = state.queue.data.items[0]
  }

  let isAdmin = (state.user.session.id && (state.user.session.id === state.session.id))

  return {
    item,
    isAdmin
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const KBNowPlayingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBNowPlaying)

export default KBNowPlayingContainer