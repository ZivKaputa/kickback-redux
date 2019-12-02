import { connect } from 'react-redux'
import KBNowPlaying from '../../components/KBNowPlaying'

const mapStateToProps = state => {
  var item = null
  if (state.queue.data.items && state.queue.data.items.length > 0) {
    item = state.queue.data.items[0]
  }
  return {
    item: item
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