import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { views } from '../../reducers/menu/currentView.js'
import KBMenuPrimaryViewContainer from '../../containers/KBMenuPrimaryViewContainer'
import './KBMenu.scss'

class KBMenu extends Component {
  render() {

    var viewContent = null
    switch (this.props.currentView) {
      case views.PRIMARY:
        viewContent = <KBMenuPrimaryViewContainer/>
        break
      case views.LOGIN:
        viewContent = <div> LOGIN </div>
        break
      case views.SIGN_UP:
        viewContent = <div> SIGN_UP </div>
        break
      case views.JOIN:
        viewContent = <div> JOIN </div>
        break
      case views.CREATE:
        viewContent = <div> CREATE </div>
        break
      default:
        viewContent = <div> Error </div>
        break
    }

    return (
      <div className='kb-menu'>
        {viewContent}
      </div>
    )
  }
}

KBMenu.propTypes = {
  currentView: PropTypes.string
}

export default KBMenu