import { connect } from 'react-redux'
import KBChat from '../../components/KBChat'

const mapStateToProps = state => {
  return {
    messages: (state.chat.data.items || [])
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const KBChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KBChat)

export default KBChatContainer