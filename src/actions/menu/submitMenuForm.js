import updateMenuFormError from './updateMenuFormError'
import updateCurrentMenuView from './updateCurrentMenuView'
import updateUser from '../user/updateUser'
import updateSession from '../session/updateSession'
import followUser from '../user/followUser'
import { views } from '../../reducers/menu/currentView'

function safeNull(obj) {
  if (!obj) {
    return null
  }
  return obj
}

export default function submitMenuForm(formInfo) {
  return function(dispatch, getState) {

    dispatch(updateMenuFormError(''))

    const BASE_URL = 'https://frabric.herokuapp.com/'
    var url = null;

    // Build form submission url based on form inputs
    switch (formInfo.id) {
      case views.LOGIN:
        url = BASE_URL + `validate_user?username=${formInfo.inputs.username.value}&password=${formInfo.inputs.password.value}`
        break
      case views.SIGN_UP:
        url = BASE_URL + `create_user?username=${formInfo.inputs.username.value}&password=${formInfo.inputs.password.value}`
        break
      case views.JOIN:
        url = BASE_URL + `validate_session?session_id=${formInfo.inputs.sessionID.value}&session_password=${formInfo.inputs.sessionPassword.value}`
        break
      case views.CREATE:
        url = BASE_URL + `create_session?session_id=${formInfo.inputs.sessionID.value}&session_password=${formInfo.inputs.sessionPassword.value}` +
          `&session_name=${formInfo.inputs.sessionName.value}&owner=${getState().user.id}`
        break
      case views.ADD_FOLLOWER:
        handle(() => dispatch(followUser(formInfo.inputs.username.value)))
        return
      default:
        break
    }

    // Submit form data to endpoint
    handle(() => fetch(url))

    function handle(promise) {
      promise().then(function(response) {
        handleError(formInfo, response)
        return response
      }).then(function(response) {
        handleSuccess(formInfo, response)
      }).catch(function(error) {
          console.log(error)
      })
    }

    function handleError(formInfo, response) {
      if (!response.ok) {
        response.text().then(errorText => dispatch(updateMenuFormError(errorText)))
      }
    }

    function handleSuccess(formInfo, response) {
      if (response.ok) {
        switch (formInfo.id) {
          case views.LOGIN:
          case views.SIGN_UP:
            dispatch(updateUser(formInfo.inputs.username.value))
            break
          case views.CREATE:
          case views.JOIN:
            response.text().then(text => {
              response = JSON.parse(text)
              dispatch(updateSession(safeNull(response.session_id), safeNull(response.session_name)))
            })
            break
          default:
            break
        }
        dispatch(updateCurrentMenuView(views.PRIMARY))
      }
    }

  }
}
