import React, { Component } from 'react'
import PropTypes from 'prop-types'
import KBSearchBar from '../KBSearchBar'

class KBSearch extends Component {
  render() {
    return (
      <div>
        <KBSearchBar
          onPatientChange={this.props.fetchResults}
          onChange={this.props.updateQuery}
          value={this.props.query}
        />
      </div>
    )
  }
}

KBSearch.propTypes = {
  fetchResults: PropTypes.func,
  updateQuery: PropTypes.func,
  query: PropTypes.string,
}

export default KBSearch