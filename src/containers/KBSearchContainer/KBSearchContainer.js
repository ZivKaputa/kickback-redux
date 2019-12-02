import { connect } from 'react-redux'
import fetchResults from '../../actions/search/fetchResults'
import updateQuery from '../../actions/search/updateQuery'
import addItem from '../../actions/queue/addItem'
import deleteItem from '../../actions/queue/deleteItem'
import reorderItems from '../../actions/queue/reorderItems'
import KBSearch from '../../components/KBSearch'

const mapStateToProps = state => {
  return {
    items: state.search.results.items,
    query: state.search.query
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateQuery: query => {
      dispatch(updateQuery(query))
    },
    fetchResults: query => {
      dispatch(fetchResults(query))
    },
    addItem: (uri) => {
      dispatch(reorderItems(1,2))
      // dispatch(deleteItem(1))
      // dispatch(addItem(uri))
    }
  }
}

const KBSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBSearch)

export default KBSearchContainer