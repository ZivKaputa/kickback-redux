import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdbreact/dist/css/mdb.css'
import VisibleApp from './VisibleApp'
import * as serviceWorker from './serviceWorker'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import restoreUser from './actions/user/restoreUser.js'
import restoreSession from './actions/session/restoreSession.js'
import fetchChat from './actions/chat/fetchChat.js'
import fetchItems from './actions/queue/fetchItems.js'
import fetchFollowing from './actions/user/fetchFollowing.js'
import {initializeSocket} from './utilities/socket-context'

let socket = initializeSocket()

socket.on('update', msg => {
  if (msg === 'queue') {
    store.dispatch(fetchItems())
  }
  if (msg === 'chat') {
    store.dispatch(fetchChat())
  }
  if (msg === 'followers') {
    store.dispatch(fetchFollowing())
  }
})

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

store.dispatch(restoreUser())
store.dispatch(restoreSession())

ReactDOM.render(
  <Provider store={store}>
    <VisibleApp />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
