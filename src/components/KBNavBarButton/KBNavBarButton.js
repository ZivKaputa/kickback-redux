import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MDBIcon } from 'mdbreact'
import './KBNavBarButton.scss'

class KBNavBarButton extends Component {
  render() {
    const navBarButtonClass = this.props.active ? 'kb-nav-bar-button-active' : 'kb-nav-bar-button-inactive'
    return (
      <div className='kb-nav-bar-button'>
        <MDBIcon className={navBarButtonClass} onClick={this.props.onClick} icon={this.props.icon}/>
      </div>
    )
  }
}

KBNavBarButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string
}

export default KBNavBarButton