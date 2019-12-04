import { MENU_VIEW_UPDATE_CURRENT } from '../../actions/menu/updateCurrentMenuView.js'
import { UPDATE_MENU_FORM_FIELD } from '../../actions/menu/updateMenuFormField.js'
import { views } from './currentView.js'

const DEFAULT_STATE = {}

const USERNAME_PLACEHOLDER = 'e.g. Bobby Shmurda'
const PASSWORD_PLACEHOLDER = 'e.g. FreeBobby2019'
const SESSION_ID_PLACEHOLDER = 'e.g. 12345'
const SESSION_NAME_PLACEHOLDER = 'e.g. Bobby\'s Fire Beats'

export default function formInfo(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case MENU_VIEW_UPDATE_CURRENT:
      switch (action.currentView) {
        case views.LOGIN:
          return {
            inputs: {
              username: {
                label: 'Username',
                placeholder: USERNAME_PLACEHOLDER,
                value: ''
              },
              password: {
                label: 'Password',
                placeholder: PASSWORD_PLACEHOLDER,
                value: ''
              }
            },
            title: 'Log In to Kickback',
            submitLabel: 'Log In',
            error: ''
          }
        case views.SIGN_UP:
          return {
            inputs: {
              username: {
                label: 'Username',
                placeholder: USERNAME_PLACEHOLDER,
                value: ''
              },
              password: {
                label: 'Password',
                placeholder: PASSWORD_PLACEHOLDER,
                value: ''
              }
            },
            title: 'Sign Up for Kickback',
            submitLabel: 'Sign Up',
            error: ''
          }
        case views.JOIN:
          return {
            inputs: {
              sessionID: {
                label: 'Session ID',
                placeholder: SESSION_ID_PLACEHOLDER,
                value: ''
              },
              sessionPassword: {
                label: 'Session Password',
                placeholder: PASSWORD_PLACEHOLDER,
                value: ''
              }
            },
            title: 'Join a Session',
            submitLabel: 'Join',
            error: ''
          }
        case views.CREATE:
          return {
            inputs: {
              sessionName: {
                label: 'Session Name',
                placeholder: SESSION_NAME_PLACEHOLDER,
                value: ''
              },
              sessionID: {
                label: 'Session ID (Optional)',
                placeholder: SESSION_ID_PLACEHOLDER,
                value: ''
              },
              sessionPassword: {
                label: 'Session Password (Optional)',
                placeholder: PASSWORD_PLACEHOLDER,
                value: ''
              }
            },
            title: 'Create a Session',
            submitLabel: 'Create',
            error: ''
          }
        case views.ADD_FOLLOWER:
          return {
            inputs: {
              username: {
                label: 'Username',
                placeholder: USERNAME_PLACEHOLDER,
                value: ''
              }
            },
            title: 'Follow a User',
            submitLabel: 'Follow',
            error: ''
          }
        default:
          return state
      }
    case UPDATE_MENU_FORM_FIELD:
      switch (action.currentView) {
        default:
          return {
            ...state,
            inputs: {
              ...state.inputs,
              [action.field]: {
                ...state.inputs[action.field],
                value: action.newVal
              }
            }
          }
      }
    default:
      return state
  }
}