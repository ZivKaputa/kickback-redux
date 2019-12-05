import { connect } from 'react-redux'
import deleteItem from '../../actions/queue/deleteItem'
import reorderItems from '../../actions/queue/reorderItems'
import updateScrollPosition from '../../actions/queue/updateScrollPosition'
import KBQueue from '../../components/KBQueue'

const mapStateToProps = state => {
  return {
    tracks: state.queue.data.items || [],
    scrollPosition: state.queue.scrollPosition,
    isAdmin: (state.user.session.id === state.session.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: songId => {
      dispatch(deleteItem(songId))
    },
    onReorder: (fromId, toId) => {
      dispatch(reorderItems(fromId, toId))
    },
    onScroll: scrollPosition => {
      dispatch(updateScrollPosition(scrollPosition))
    }
  }
}

const KBQueueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBQueue)

export default KBQueueContainer