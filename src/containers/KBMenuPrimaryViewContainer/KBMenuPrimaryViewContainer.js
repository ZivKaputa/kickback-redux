import { connect } from 'react-redux'
import KBMenuPrimaryView from '../../components/KBMenuPrimaryView'
import updateCurrentMenuView from '../../actions/menu/updateCurrentMenuView'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateView: view => {
      dispatch(updateCurrentMenuView(view))
    }
  }
}

const KBMenuPrimaryViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBMenuPrimaryView)

export default KBMenuPrimaryViewContainer