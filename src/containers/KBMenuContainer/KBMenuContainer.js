import { connect } from 'react-redux'
import KBMenu from '../../components/KBMenu'
import updateCurrentMenuView from '../../actions/menu/updateCurrentMenuView'
import updateJoinFormSessionID from '../../actions/forms/join/updateJoinFormSessionID'
import updateJoinFormSessionPassword from '../../actions/forms/join/updateJoinFormSessionPassword'

const mapStateToProps = state => {
  return {
    currentView: state.menu.currentView
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateView: view => {
      dispatch(updateCurrentMenuView(view))
    },
    onJoinFormSessionIDChange: newSessionID => {
        dispatch(updateJoinFormSessionID(newSessionID))
    },
    onJoinFormSessionPasswordChange: newSessionPassword => {
        dispatch(updateJoinFormSessionPassword(newSessionPassword))
    }
  }
}

const KBMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBMenu)

export default KBMenuContainer