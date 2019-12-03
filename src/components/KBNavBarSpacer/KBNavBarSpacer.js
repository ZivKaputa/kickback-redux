import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './KBNavBarSpacer.scss'

class KBNavBarSpacer extends Component {

  render() {

    let fixedStyle = null
    if (this.props.width) {
      fixedStyle = {
        flex: 'none',
        width: this.props.width
      }
    }

    return (
      <div  className='kb-nav-bar-spacer' style={fixedStyle}>
      </div>
    )
  }
}

KBNavBarSpacer.propTypes = {
}

export default KBNavBarSpacer