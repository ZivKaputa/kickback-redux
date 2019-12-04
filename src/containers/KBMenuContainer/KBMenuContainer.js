import { connect } from 'react-redux'
import KBMenu from '../../components/KBMenu'
import updateCurrentMenuView from '../../actions/menu/updateCurrentMenuView'
import updateMenuFormField from '../../actions/menu/updateMenuFormField.js'

const mapStateToProps = state => {
  return {
    currentView: state.menu.currentView,
    formInfo: state.menu.formInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateView: view => {
      dispatch(updateCurrentMenuView(view))
    },
    onInputChange: (field, newVal) => {
      dispatch(updateMenuFormField(field, newVal))
    }
  }
}

const KBMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBMenu)

export default KBMenuContainer