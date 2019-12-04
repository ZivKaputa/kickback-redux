import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './KBMenuFormView.scss'
import '../KBMenuPrimaryView/KBMenuPrimaryView.scss'
import FormInputBar from '../KBFormInputBar'

class KBMenuFormView extends Component {

  render() {

    const inputs = this.props.inputs.map(inputInfo => (
      <FormInputBar
        label={inputInfo.label}
        placeholder={inputInfo.placeholder}
        value={inputInfo.value}
        onChange={inputInfo.onChange}
        key={inputInfo.label}
      />
    ))

    return (
      <div className='kb-menu-form-view'>
        <div className='kb-menu-form-header'>
          {this.props.title}
        </div>
        <div className='kb-menu-form-view-input-container'>
          {inputs}
        </div>
        <div className='kb-menu-form-view-error'>
          {this.props.error}
        </div>
        <div className='kb-menu-form-view-controls'>
          <div className='kb-menu-form-view-submit'>
            <a className='kb-menu-link' onClick={this.props.onSubmit}>{this.props.submitLabel}</a>
          </div>
          <div className='kb-menu-form-view-cancel'>
            <a className='kb-menu-link' onClick={this.props.onCancel}>Cancel</a>
          </div>
        </div>
      </div>
    )
  }
}

KBMenuFormView.propTypes = {
  title: PropTypes.string,
  inputs: PropTypes.array,
  submitLabel: PropTypes.string,
  error: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func
}

export default KBMenuFormView