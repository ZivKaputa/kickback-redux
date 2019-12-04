import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { views } from '../../reducers/menu/currentView.js'
import KBMenuPrimaryViewContainer from '../../containers/KBMenuPrimaryViewContainer'
import KBMenuFormView from '../KBMenuFormView'
import './KBMenu.scss'


class KBMenu extends Component {
  render() {

    const LOGIN_FORM_INPUTS = [
      {
        label: 'Username',
        placeholder: 'e.g. Bobby Shmurda',
        value: this.props.loginFormUsernameValue,
        onChange: this.props.onLoginFormUsernameChange
      },
      {
        label: 'Password',
        placeholder: 'e.g. password123',
        value: this.props.loginFormPasswordValue,
        onChange: this.props.onLoginFormPasswordChange
      },
    ]

    const SIGN_UP_FORM_INPUTS = [
      {
        label: 'Username',
        placeholder: 'e.g. Bobby Shmurda',
        value: this.props.signUpFormUsernameValue,
        onChange: this.props.onSignUpFormUsernameChange,
      },
      {
        label: 'Password',
        placeholder: 'e.g. password123',
        value: this.props.signUpFormPasswordValue,
        onChange: this.props.onSignUpFormPasswordChange,
      },
    ]

    const JOIN_FORM_INPUTS = [
      {
        label: 'Session ID',
        placeholder: 'e.g. abc123',
        value: this.props.joinFormSessionIDValue,
        onChange: this.props.onJoinFormSessionIDChange
      },
      {
        label: 'Session Password',
        placeholder: 'e.g. password123',
        value: this.props.joinFormSessionPasswordValue,
        onChange: this.props.onJoinFormSessionPasswordChange
      },
    ]

    const CREATE_FORM_INPUTS = [
      {
        label: 'Session Name',
        placeholder: 'e.g Bobby\'s Fire Jams',
        value: this.props.createFormSessionNameValue,
        onChange: this.props.onCreateFormSessionNameChange
      },
      {
        label: 'Session ID (Optional)',
        placeholder: 'e.g. abc123',
        value: this.props.createFormSessionIDValue,
        onChange: this.props.onCreateFormSessionIDChange
      },
      {
        label: 'Session Password (Optional)',
        placeholder: 'e.g. password123',
        value: this.props.createFormSessionPasswordValue,
        onChange: this.props.onCreateFormSessionPasswordChange
      },
    ]

    const ADD_FOLLOWER_FORM_INPUTS = [
      {
        label: 'Username',
        placeholder: 'e.g. Bobby Shmurda',
        value: this.props.addFollowerFormNameValue,
        onChange: this.props.onAddFollowerFormNameChange
      }
    ]

    var viewContent = null
    switch (this.props.currentView) {
      case views.PRIMARY:
        viewContent = <KBMenuPrimaryViewContainer/>
        break
      case views.LOGIN:
        viewContent = <KBMenuFormView
          title='Login to Kickback'
          submitLabel='Login'
          error=''
          inputs={LOGIN_FORM_INPUTS}
          onSubmit={()=>{}}
          onCancel={() => {this.props.updateView(views.PRIMARY)}}
        />
        break
      case views.SIGN_UP:
        viewContent = <KBMenuFormView
          title='Sign Up for Kickback'
          submitLabel='Sign Up'
          error=''
          inputs={SIGN_UP_FORM_INPUTS}
          onSubmit={()=>{}}
          onCancel={() => {this.props.updateView(views.PRIMARY)}}
        />
        break
      case views.JOIN:
        viewContent = <KBMenuFormView
          title='Join a Session'
          submitLabel='Join'
          error=''
          inputs={JOIN_FORM_INPUTS}
          onSubmit={()=>{}}
          onCancel={() => {this.props.updateView(views.PRIMARY)}}
        />
        break
      case views.CREATE:
        viewContent = <KBMenuFormView
          title='Create a Session'
          submitLabel='Create'
          error=''
          inputs={CREATE_FORM_INPUTS}
          onSubmit={()=>{}}
          onCancel={() => {this.props.updateView(views.PRIMARY)}}
        />
        break
      case views.ADD_FOLLOWER:
        viewContent = <KBMenuFormView
          title='Follow a User'
          submitLabel='Follow'
          error=''
          inputs={ADD_FOLLOWER_FORM_INPUTS}
          onSubmit={()=>{}}
          onCancel={() => {this.props.updateView(views.PRIMARY)}}
        />
        break
      default:
        viewContent = <div> Error </div>
        break
    }

    return (
      <div className='kb-menu'>
        <div className='kb-menu-title'>
          Menu
        </div>
        {viewContent}
      </div>
    )
  }
}

KBMenu.propTypes = {
  currentView: PropTypes.string,
  loginFormUsernameValue: PropTypes.string,
  loginFormPasswordValue: PropTypes.string,
  onLoginFormUsernameChange: PropTypes.func,
  onLoginFormPasswordChange: PropTypes.func,
  signUpFormUsernameValue: PropTypes.string,
  signUpFormPasswordValue: PropTypes.string,
  onSignUpFormUsernameChange: PropTypes.func,
  onSignUpFormPasswordChange: PropTypes.func,
  joinFormSessionIDValue: PropTypes.string,
  joinFormSessionPasswordValue: PropTypes.string,
  onJoinFormSessionIDChange: PropTypes.func,
  onJoinFormSessionPasswordChange: PropTypes.func,
  createFormSessionNameValue: PropTypes.string,
  createFormSessionIDValue: PropTypes.string,
  createFormSessionPasswordValue: PropTypes.string,
  onCreateFormSessionNameChange: PropTypes.func,
  onCreateFormSessionIDChange: PropTypes.func,
  onCreateFormSessionPasswordChange: PropTypes.func,
  addFollowerFormNameValue: PropTypes.string,
  onAddFollowerFormNameChange: PropTypes.func,
  updateView: PropTypes.func
}

export default KBMenu