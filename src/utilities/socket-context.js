import * as io from 'socket.io-client'

let socket

export const initializeSocket = (mesg) => {
  socket = io('https://kickback-socket-server.herokuapp.com/')
  return socket
}

export const getSocket = () => {
  return socket
}