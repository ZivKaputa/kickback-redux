import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './KBMenuFormView.scss'
import '../KBMenuPrimaryView/KBMenuPrimaryView.scss'
import KBFormInputBar from '../KBFormInputBar'

class KBMenuFormView extends Component {

  render() {

    const inputs = this.props.formInfo.inputs
    const inputContent = Object.keys(inputs).map(field => (
      <KBFormInputBar
        label={inputs[field].label}
        placeholder={inputs[field].placeholder}
        value={inputs[field].value}
        onChange={newVal => this.props.onInputChange(field, newVal)}
        key={field}
      />
    ))

    return (
      <div className='kb-menu-form-view'>
        <div className='kb-menu-form-header'>
          {this.props.formInfo.title}
        </div>
        <div className='kb-menu-form-view-input-container'>
          {inputContent}
        </div>
        <div className='kb-menu-form-view-error'>
          {this.props.formInfo.error}
        </div>
        <div className='kb-menu-form-view-controls'>
          <div className='kb-menu-form-view-submit'>
            <a className='kb-menu-link' onClick={this.props.onSubmit}>{this.props.formInfo.submitLabel}</a>
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
  formInfo: PropTypes.object,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  onInputChange: PropTypes.func
}

export default KBMenuFormView