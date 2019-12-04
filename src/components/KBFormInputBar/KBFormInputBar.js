import React, { Component } from 'react'
import PatientSearchBar from '../PatientSearchBar'
import PropTypes from 'prop-types'
import './KBFormInputBar.scss'

class KBFormInputBar extends Component {
  render() {
    return (
      <div className='kb-form-input-bar-container'>
        <div className='kb-form-input-bar-header'>
          {this.props.label}
        </div>
        <PatientSearchBar
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          className="kb-form-input-bar-text"
        />
      </div>
    )
  }
}

KBFormInputBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string
}

export default KBFormInputBar