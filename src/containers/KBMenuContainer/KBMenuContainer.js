import { connect } from 'react-redux'
import KBMenu from '../../components/KBMenu'

const mapStateToProps = state => {
  return {
    currentView: state.menu.currentView
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const KBMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBMenu)

export default KBMenuContainer