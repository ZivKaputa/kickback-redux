import { combineReducers } from 'redux'
import joinForm from './joinForm.js'
// import createForm from './createForm.js'
// import loginForm from './loginForm.js'
// import signUpForm from './signUpForm.js'
// import addFollowerForm from './addFollowerForm.js'

const forms = combineReducers({
  joinForm,
  // createForm,
  // loginForm,
  // signUpForm,
  // addFollowerForm
})

export default forms