import { connect } from 'react-redux'
import KBChat from '../../components/KBChat'
import updateChatInputText from '../../actions/chat/updateChatInputText'
import sendMessage from '../../actions/chat/sendMessage'

const mapStateToProps = state => {
  return {
    messages: (state.chat.data.items || []),
    inputText: state.chat.inputText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateText: newText => {
      dispatch(updateChatInputText(newText))
    },
    sendMessage: () => {
      dispatch(sendMessage())
    }
  }
}

const KBChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBChat)

export default KBChatContainer