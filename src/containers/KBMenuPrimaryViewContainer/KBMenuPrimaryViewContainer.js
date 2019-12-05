import { connect } from 'react-redux'
import KBMenuPrimaryView from '../../components/KBMenuPrimaryView'
import updateCurrentMenuView from '../../actions/menu/updateCurrentMenuView'
import updateUser from '../../actions/user/updateUser'
import deleteOwnedSession from '../../actions/user/deleteOwnedSession'
import updateSession from '../../actions/session/updateSession'
import unfollowUser from '../../actions/user/unfollowUser'

const mapStateToProps = state => {
  return {
    username: state.user.id,
    sessionName: state.session.name,
    sessionID: state.session.id,
    mySessionID: state.user.session.id,
    mySessionName: state.user.session.name,
    following: state.user.following.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateView: view => {
      dispatch(updateCurrentMenuView(view))
    },
    logout: () => {
      dispatch(updateUser(null))
    },
    leaveSession: () => {
      dispatch(updateSession(null, null))
    },
    updateSession: (sessionID, sessionName) => {
      dispatch(updateSession(sessionID, sessionName))
    },
    deleteMySession: () => {
      dispatch(deleteOwnedSession())
    },
    unfollowUser: following => {
      dispatch(unfollowUser(following))
    }
  }
}

const KBMenuPrimaryViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBMenuPrimaryView)

export default KBMenuPrimaryViewContainer