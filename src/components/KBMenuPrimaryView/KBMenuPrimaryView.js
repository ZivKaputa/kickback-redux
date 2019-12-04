import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './KBMenuPrimaryView.scss'

class KBMenuPrimaryView extends Component {
  render() {

    const DEFAULT_LOGIN_CONTENT = (
      <div>
        Guest
      </div>
    )
    const DEFAULT_CURRENT_SESSION_CONTENT = (
      <div>
        <a className='kb-menu-link'>Join</a>
        <span> or </span>
        <a className='kb-menu-link'>Create</a>
      </div>
    )
    const DEFAULT_MY_SESSION_CONTENT = (
      <div>
        <a className='kb-menu-link'>Create</a>
      </div>
    )
    const DEFAULT_FRIENDS_LIST_CONTENT = (
      <div>
        <a className='kb-menu-link'>Add Friends</a>
      </div>
    )

    const NONE = 'None'
    const usernameContent = this.props.username ? this.props.username : DEFAULT_LOGIN_CONTENT
    const currentSessionContent = this.props.sessionName ? this.props.sessionName : DEFAULT_CURRENT_SESSION_CONTENT
    const mySessionContent = this.props.mySessionName ? this.props.mySessionName : DEFAULT_MY_SESSION_CONTENT
    const friendListContent = (this.props.friends && this.props.friends.length > 0)  ? this.props.friends : DEFAULT_FRIENDS_LIST_CONTENT

    return (
      <div className='kb-menu-primary-view'>
        <div className='kb-menu-primary-view-title'>
          Menu
        </div>
        <div className='kb-menu-primary-view-section'>
          <div className='kb-menu-primary-view-section-title'> Logged In As </div>
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
          <div className='kb-menu-primary-view-section-title'> Friends </div>
          <div className='kb-menu-primary-view-section-content'> {friendListContent} </div>
        </div>
      </div>
    )
  }
}

KBMenuPrimaryView.propTypes = {
}

export default KBMenuPrimaryView