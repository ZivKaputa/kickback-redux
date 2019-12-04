import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { views } from '../../reducers/menu/currentView.js'
import KBMenuPrimaryViewContainer from '../../containers/KBMenuPrimaryViewContainer'
import KBMenuFormView from '../KBMenuFormView'
import './KBMenu.scss'


class KBMenu extends Component {
  render() {

    var viewContent = null
    switch (this.props.currentView) {
      case views.PRIMARY:
        viewContent = <KBMenuPrimaryViewContainer/>
        break
      case views.LOGIN:
      case views.SIGN_UP:
      case views.CREATE:
      case views.ADD_FOLLOWER:
      case views.JOIN:
        viewContent = <KBMenuFormView
          formInfo={this.props.formInfo}
          onInputChange={this.props.onInputChange}
          onSubmit={()=>{}}
          onCancel={() => {this.props.updateView(views.PRIMARY)}}
        />
        break
      default:
        viewContent = <div> Error </div>
        break
    }

    return (
      <div className='kb-menu'>
        <div className='kb-menu-title'>
          Menu
        </div>
        {viewContent}
      </div>
    )
  }
}

KBMenu.propTypes = {
  currentView: PropTypes.string,
  updateView: PropTypes.func,
  onInputChange: PropTypes.func,
  formInfo: PropTypes.object
}

export default KBMenu