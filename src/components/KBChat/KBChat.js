import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './KBChat.scss'

class KBChat extends Component {

  render() {

    const chatList = this.props.messages.map(messageInfo => {
      return (
        <div className='kb-chat-message-box'>
          <span className='kb-chat-message-title'>{messageInfo.username} </span>
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
        
      </div>
    )
  }
}

KBChat.propTypes = {
  messages: PropTypes.array
}

export default KBChat