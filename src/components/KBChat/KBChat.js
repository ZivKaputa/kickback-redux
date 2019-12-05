import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PatientSearchBar from '../PatientSearchBar'
import { MDBIcon } from 'mdbreact'
import './KBChat.scss'

class KBChat extends Component {

  render() {

    const chatList = this.props.messages.map((messageInfo, messageId) => {
      return (
        <div key={messageId} className='kb-chat-message-box'>
          <span className='kb-chat-message-title'>{messageInfo.username}: </span>
          {messageInfo.message}
        </div>
      )
    })

    return (
      <div className='kb-chat'>
        <div className='kb-chat-title'>
          Chat
        </div>
        <div className='kb-chat-list-container'>
          <div className='kb-chat-top-spacer'/>
          {chatList}
        </div>
        <div className='kb-menu-control-container'>
          <PatientSearchBar
            placeholder={'Enter a message...'}
            value={this.props.inputText}
            onChange={this.props.updateText}
            className="kb-menu-chat-text-box"
          />
          <div className='kb-menu-chat-button' onClick={this.props.sendMessage}>
            <MDBIcon icon='paper-plane'/>
          </div>
        </div>
      </div>
    )
  }
}

KBChat.propTypes = {
  messages: PropTypes.array,
  inputText: PropTypes.string,
  updateText: PropTypes.func,
  sendMessage: PropTypes.func
}

export default KBChat