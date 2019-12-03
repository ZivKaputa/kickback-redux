import { connect } from 'react-redux'
import KBControlPanel from '../../components/KBControlPanel'
import updateCurrent from '../../actions/tab/updateCurrent'

const mapStateToProps = state => {
  return {
    items: state.search.results.items || [],
    currentTab: state.tab.current,
    isMenuOpen: state.menu.isOpen,
    isChatOpen: state.chat.isOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const KBControlPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBControlPanel)

export default KBControlPanelContainer