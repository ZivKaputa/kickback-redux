import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { views } from '../../reducers/menu/currentView'
import './KBMenuPrimaryView.scss'

class KBMenuPrimaryView extends Component {
  render() {

    const DEFAULT_LOGIN_CONTENT = (
      <div className='kb-menu-primary-bottom-controls'>
        <a className='kb-menu-link' onClick={() => {this.props.updateView(views.LOGIN)}}>Log In</a>
        <span> • </span>
        <a className='kb-menu-link' onClick={() => {this.props.updateView(views.SIGN_UP)}}>Sign Up</a>
      </div>
    )
    const DEFAULT_CURRENT_SESSION_CONTENT = (
      <div className='kb-menu-primary-bottom-controls'>
        {
          this.props.username ? (
            <span>
              <a className='kb-menu-link' onClick={() => {this.props.updateView(views.JOIN)}}>Join</a>
              <span> • </span>
              <a className='kb-menu-link' onClick={() => {this.props.updateView(views.CREATE)}}>Create</a>
            </span>
          ) : (
            <span>
              <a className='kb-menu-link' onClick={() => {this.props.updateView(views.JOIN)}}>Join</a>
              <span> • </span>
              <a className='kb-menu-link' onClick={() => {this.props.updateView(views.LOGIN)}}>Log In</a>
              <span> (to Create)</span>
            </span>
          )
        }
      </div>
    )
    const DEFAULT_MY_SESSION_CONTENT = (
      <div className='kb-menu-primary-bottom-controls'>
        {
          this.props.username ? (
            <span>
              <a className='kb-menu-link' onClick={() => {this.props.updateView(views.CREATE)}}>Create</a>
            </span>
          ) : (
            <span>
              <a className='kb-menu-link' onClick={() => {this.props.updateView(views.LOGIN)}}>Log In</a><span> to Create</span>
            </span>
          )
        }
      </div>
    )
    const DEFAULT_FOLLOWING_LIST_CONTENT = (
      <div className='kb-menu-primary-bottom-controls'>
        <a className='kb-menu-link' onClick={() => {this.props.updateView(views.ADD_FOLLOWER)}}>Follow a New User</a>
      </div>
    )

    const usernameContent = this.props.username
    ? (
      <div>
        <div className='kb-menu-important'>
          <span className='kb-menu-bolder'>Username: </span>
          {this.props.username}
        </div>
        <div className='kb-menu-primary-bottom-controls'>
          <a className='kb-menu-link' onClick={this.props.logout}>Log Out</a>
        </div>
      </div>
    )
    : DEFAULT_LOGIN_CONTENT

    const currentSessionContent = this.props.sessionName
      ? (
        <div>
          <div className='kb-menu-important'>
            <span className='kb-menu-bolder'>Name: </span>
            {this.props.sessionName}
          </div>
          <div className='kb-menu-important'>
            <span className='kb-menu-bolder'>ID: </span>
            {this.props.sessionID}
          </div>
          <div className='kb-menu-primary-bottom-controls'>
            <a className='kb-menu-link' onClick={this.props.leaveSession}>Leave</a>
            <span> • </span>
            <a className='kb-menu-link' onClick={() => {this.props.updateView(views.JOIN)}}>Switch</a>
          </div>
        </div>
      )
      : DEFAULT_CURRENT_SESSION_CONTENT

    const mySessionContent = this.props.mySessionID ? (
      <div>
        <div className='kb-menu-important'>
          <span className='kb-menu-bolder'>Name: </span> {this.props.mySessionName}
        </div>
        <div className='kb-menu-important'>
          <span className='kb-menu-bolder'>ID: </span> {this.props.mySessionID}
        </div>
        <div className='kb-menu-primary-bottom-controls'>
          {this.props.sessionID !== this.props.mySessionID ? (
            <span>
              <a className='kb-menu-link' onClick={() => this.props.updateSession(this.props.mySessionID, this.props.mySessionName)}>Rejoin</a>
              <span> • </span>
            </span>
          ) : null}
          <a className='kb-menu-link' onClick={this.props.deleteMySession}>End</a>
        </div>
      </div>
    ) : DEFAULT_MY_SESSION_CONTENT

    const followingListContent = (this.props.following && this.props.following.length > 0)
      ? this.props.following.map(rawUserData => {
          let username = Object.keys(rawUserData)[0]
          let userInfo = rawUserData[username]
          return (
            <div className='kb-following'>
              <div className='kb-following-username'>{username}</div>
              {userInfo.session_id ? <div className='kb-following-session-header'>Current Session</div> : null}
              {userInfo.session_id ? (
                <div className='kb-following-subinfo'>
                  <span className='kb-following-subinfo-label'>Name: </span>{userInfo.session_name}
                </div>)
              : null}
              {(userInfo.session_id && userInfo.now_playing) ? (
                <div className='kb-following-subinfo'>
                  <span className='kb-following-subinfo-label'>Now Playing: </span>{userInfo.now_playing.name}
                </div>)
              : null}
              <div className='kb-following-controls'>
                {userInfo.session_id ? (
                  <span>
                    <a className='kb-menu-link' onClick={() => this.props.updateSession(userInfo.session_id, userInfo.session_name)}>Join Session</a>
                    <span> • </span>
                  </span>
                ) : null}
                <a className='kb-menu-link' onClick={() => this.props.unfollowUser(username)}>Unfollow</a>
              </div>
            </div>
          )
      })
      : null

    return (
      <div className='kb-menu-primary-view'>
        <div className='kb-menu-primary-view-section'>
          <div className='kb-menu-primary-view-section-title'> Account Info </div>
          <div className='kb-menu-primary-view-section-content'> {usernameContent} </div>
        </div>
        <div className='kb-menu-primary-view-section'>
          <div className='kb-menu-primary-view-section-title'> My Session </div>
          <div className='kb-menu-primary-view-section-content'> {mySessionContent} </div>
        </div>
        <div className='kb-menu-primary-view-section'>
          <div className='kb-menu-primary-view-section-title'> Current Session </div>
          <div className='kb-menu-primary-view-section-content'> {currentSessionContent} </div>
        </div>
        <div className='kb-menu-primary-view-section'>
          <div className='kb-menu-primary-view-section-title'> Following </div>
          <div className='kb-menu-primary-view-section-content'> {DEFAULT_FOLLOWING_LIST_CONTENT} {followingListContent} </div>
        </div>
      </div>
    )
  }
}

KBMenuPrimaryView.propTypes = {
  updateView: PropTypes.func,
  logout: PropTypes.func,
  leaveSession: PropTypes.func,
  updateSession: PropTypes.func,
  deleteMySession: PropTypes.func,
  deleteAccount: PropTypes.func,
  username: PropTypes.string,
  sessionName: PropTypes.string,
  sessionID: PropTypes.string,
  mySessionID: PropTypes.string,
  mySessionName: PropTypes.string,
  following: PropTypes.array,
  unfollowUser: PropTypes.func
}

export default KBMenuPrimaryView