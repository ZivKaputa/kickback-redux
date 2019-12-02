import React, { Component } from 'react'
import PropTypes from 'prop-types'

class KBQueue extends Component {
  render() {
    return (
      <div>
        THIS IS DA QUEUE
        <button onClick={() => this.props.fetchItems('test')}>FETCH</button>
        {this.props.items.map(item => item.name).join()}
      </div>
    )
  }
}

KBQueue.propTypes = {
  fetchResults: PropTypes.func,
  sessionId: PropTypes.string,
  items: PropTypes.array,
}

export default KBQueue