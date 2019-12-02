import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './KBNavBar.scss'

class KBNavBar extends Component {
  render() {
    const navBarClass = (this.props.type === 'primary') ? 'kb-nav-bar-primary' : 'kb-nav-bar-secondary'
    return (
      <div className={'kb-nav-bar ' + navBarClass}>
        {this.props.children}
      </div>
    )
  }
}

KBNavBar.propTypes = {
  type: PropTypes.string,
}

KBNavBar.defaultProps = {
  type: "primary"
}

export default KBNavBar