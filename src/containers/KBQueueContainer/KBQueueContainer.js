import { connect } from 'react-redux'
import fetchItems from '../../actions/queue/fetchItems'
import KBQueue from '../../components/KBQueue'

const mapStateToProps = state => {
  return {
    items: state.queue.data.items || [],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: sessionId => {
      dispatch(fetchItems(sessionId))
    }
  }
}

const KBQueueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBQueue)

export default KBQueueContainer