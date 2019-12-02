import React, { Component } from 'react'
import PatientSearchBar from '../PatientSearchBar'
import PropTypes from 'prop-types'
import './KBSearchBar.scss'

class KBSearchBar extends Component {
  render() {
    return (
      <PatientSearchBar
        placeholder={this.props.placeholder}
        value={this.props.value}
        waitTime={200}
        onPatientChange={this.props.onPatientChange}
        onChange={this.props.onChange}
        className={"kb-search-bar " + this.props.className}
      />
    )
  }
}

KBSearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onPatientChange: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string
}

KBSearchBar.defaultProps = {
  placeholder: "Search...",
  value: undefined,
  onPatientChange: () => {},
  onChange: () => {},
  className: ""
}

export default KBSearchBar