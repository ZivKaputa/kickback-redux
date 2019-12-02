import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PatientSearchBar extends Component {

  constructor(props) {
    super(props)
    this.lastChangedAt = Date.now()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(newText) {
    this.props.onChange(newText)
    const changedAt = Date.now()
    this.lastChangedAt = changedAt
    setTimeout(() => {
      if (changedAt === this.lastChangedAt) {
        this.props.onPatientChange(newText)
      }
    }, this.props.waitTime)
  }

  render() {
    return (
      <input
        type='text'
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={e => this.handleChange(e.target.value)}
        className={this.props.className}
      />
    )
  }

}

PatientSearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onPatientChange: PropTypes.func,
  onChange: PropTypes.func,
  waitTime: PropTypes.number,
  className: PropTypes.string,
}

PatientSearchBar.defaultProps = {
  placeholder: "Search...",
  value: undefined,
  onPatientChange: () => {},
  onChange: () => {},
  waitTime: 0,
  className: ""
}

export default PatientSearchBar