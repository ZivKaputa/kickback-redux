import { connect } from 'react-redux'
import KBControlPanelNavBar from '../../components/KBControlPanelNavBar'
import updateCurrent from '../../actions/tab/updateCurrent'
import toggleMenu from '../../actions/menu/toggleMenu'
import toggleChat from '../../actions/chat/toggleChat'

const mapStateToProps = state => {
  return {
    currentTab: state.tab.current,
    isMenuOpen: state.menu.isOpen,
    isChatOpen: state.chat.isOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTab: newTab => {
      dispatch(updateCurrent(newTab))
    },
    toggleMenu: newTab => {
      dispatch(toggleMenu())
    },
    toggleChat: newTab => {
      dispatch(toggleChat())
    }
  }
}

const KBControlPanelNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBControlPanelNavBar)

export default KBControlPanelNavBarContainer