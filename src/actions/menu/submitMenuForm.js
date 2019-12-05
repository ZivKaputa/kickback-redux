import updateMenuFormError from './updateMenuFormError'
import updateCurrentMenuView from './updateCurrentMenuView'
import updateUser from '../user/updateUser'
import updateSession from '../session/updateSession'
import { views } from '../../reducers/menu/currentView'

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
      default:
        break
    }

    // Submit form data to endpoint
    fetch(url).then(function(response) {
      if (!response.ok) {
          response.text().then(text => handleError(formInfo, text))
      }
      return response
    }).then(function(response) {
      if (response.ok) {
        response.text().then(res => handleSuccess(formInfo, res))
        // response.json().then(res => handleSuccess(formInfo, res))
      }
    }).catch(function(error) {
        console.log(error)
    })

    function handleError(formInfo, errorText) {
      dispatch(updateMenuFormError(errorText))
    }

    function handleSuccess(formInfo, response) {
      switch (formInfo.id) {
        case views.LOGIN:
        case views.SIGN_UP:
          dispatch(updateUser(formInfo.inputs.username.value))
          break
        case views.JOIN:
        case views.CREATE:
          // dispatch(updateSession(response.sessionID, response.sessionName))
          dispatch(updateSession(formInfo.inputs.sessionID ? formInfo.inputs.sessionID.value : 'FAKE', formInfo.inputs.sessionName ? formInfo.inputs.sessionName.value : 'FAKE'))
          break
        default:
          break
      }
      dispatch(updateCurrentMenuView(views.PRIMARY))
    }

  }
}
