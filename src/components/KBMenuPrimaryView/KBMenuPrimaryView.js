import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { views } from '../../reducers/menu/currentView'
import './KBMenuPrimaryView.scss'

class KBMenuPrimaryView extends Component {
  render() {

    const DEFAULT_LOGIN_CONTENT = (
      <div>
        <a className='kb-menu-link' onClick={() => {this.props.updateView(views.LOGIN)}}>Log In</a>
        <span> or </span>
        <a className='kb-menu-link' onClick={() => {this.props.updateView(views.SIGN_UP)}}>Sign Up</a>
      </div>
    )
    const DEFAULT_CURRENT_SESSION_CONTENT = (
      <div>
        <a className='kb-menu-link' onClick={() => {this.props.updateView(views.JOIN)}}>Join</a>
        <span> or </span>
        <a className='kb-menu-link' onClick={() => {this.props.updateView(views.CREATE)}}>Create</a>
      </div>
    )
    const DEFAULT_MY_SESSION_CONTENT = (
      <div>
        <a className='kb-menu-link' onClick={() => {this.props.updateView(views.CREATE)}}>Create</a>
      </div>
    )
    const DEFAULT_FOLLOWING_LIST_CONTENT = (
      <div>
        <a className='kb-menu-link' onClick={() => {this.props.updateView(views.ADD_FOLLOWER)}}>Follow a User</a>
      </div>
    )

    const NONE = 'None'
    const usernameContent = this.props.username ? this.props.username : DEFAULT_LOGIN_CONTENT
    const currentSessionContent = this.props.sessionName ? this.props.sessionName : DEFAULT_CURRENT_SESSION_CONTENT
    const mySessionContent = this.props.mySessionName ? this.props.mySessionName : DEFAULT_MY_SESSION_CONTENT
    const followingListContent = (this.props.following && this.props.following.length > 0)  ? this.props.following : DEFAULT_FOLLOWING_LIST_CONTENT

    return (
      <div className='kb-menu-primary-view'>
        <div className='kb-menu-primary-view-section'>
          <div className='kb-menu-primary-view-section-title'> Account Info </div>
          <div className='kb-menu-primary-view-section-content'> {usernameContent} </div>
        </div>
        <div className='kb-menu-primary-view-section'>
          <div className='kb-menu-primary-view-section-title'> Current Session </div>
          <div className='kb-menu-primary-view-section-content'> {currentSessionContent} </div>
        </div>
        <div className='kb-menu-primary-view-section'>
          <div className='kb-menu-primary-view-section-title'> My Session </div>
          <div className='kb-menu-primary-view-section-content'> {mySessionContent} </div>
        </div>
        <div className='kb-menu-primary-view-section'>
          <div className='kb-menu-primary-view-section-title'> Following </div>
          <div className='kb-menu-primary-view-section-content'> {followingListContent} </div>
        </div>
      </div>
    )
  }
}

KBMenuPrimaryView.propTypes = {
  updateView: PropTypes.func
}

export default KBMenuPrimaryView