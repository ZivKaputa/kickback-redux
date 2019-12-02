import App from './App.js'
import { connect } from 'react-redux'
import updateCurrent from './actions/tab/updateCurrent'

const mapStateToProps = state => {
  return {
    currentTab: state.tab.current
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTab: newTab => {
      dispatch(updateCurrent(newTab))
    }
  }
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default VisibleApp