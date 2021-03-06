import updateUserLocally from './updateUserLocally'
import refreshUser from './refreshUser'
import localforage from "localforage"
import { getSocket } from '../../utilities/socket-context'

export default function updateUser(newUserId) {
  return function(dispatch, getState) {

    let socket = getSocket()

    if (getState().user.id) {
      socket.emit('leave', getState().user.id)
    }
    if (newUserId) {
      socket.emit('join', newUserId)
    }

    localforage.setItem('kb-username', newUserId).then(() => {
      return localforage.getItem('kb-username')
    }).then(value => {
      dispatch(updateUserLocally(newUserId))
      dispatch(refreshUser())
    })

  }
}