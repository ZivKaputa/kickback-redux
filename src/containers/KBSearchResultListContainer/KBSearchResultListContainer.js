import { connect } from 'react-redux'
import addItem from '../../actions/queue/addItem'
import updateScrollPosition from '../../actions/search/updateScrollPosition'
import KBSearchResultList from '../../components/KBSearchResultList'
import { toast } from 'react-toastify'

const mapStateToProps = state => {
  return {
    tracks: state.search.results.items || [],
    scrollPosition: state.search.scrollPosition
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: track => {
      toast("You added '" + track.name + "' to the queue.")
      dispatch(addItem(track.uri))
    },
    onScroll: scrollTop => {
      dispatch(updateScrollPosition(scrollTop))
    }
  }
}

const KBSearchResultListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBSearchResultList)

export default KBSearchResultListContainer