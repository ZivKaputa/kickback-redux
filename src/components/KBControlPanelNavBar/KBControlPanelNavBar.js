import React, { Component } from 'react'
import PropTypes from 'prop-types'
import KBNavBar from '../KBNavBar'
import KBNavBarButton from '../KBNavBarButton'
import KBNavBarSpacer from '../KBNavBarSpacer'
import {tabs} from '../../reducers/tab/current.js'
import KBSearchContainer from '../../containers/KBSearchContainer'
import './KBControlPanelNavBar.scss'

const titles = {
  search: '',
  queue: 'Queue',
  now_playing: 'Now Playing'
}

class KBControlPanelNavBar extends Component {
  render() {

    const searchBar = this.props.currentTab === tabs.SEARCH ? <KBSearchContainer/> : null
    const title = titles[this.props.currentTab]

    return (
      <KBNavBar type='secondary'>
        <KBNavBarButton active={this.props.isMenuOpen} icon='bars' onClick={() => {this.props.toggleMenu()}}/>
        <KBNavBarSpacer width='4px'/>
        {title}{searchBar}
        <KBNavBarSpacer/>
        <KBNavBarButton active={this.props.currentTab === tabs.SEARCH} icon='search' onClick={() => {this.props.updateTab(tabs.SEARCH)}}/>
        <KBNavBarButton active={this.props.currentTab === tabs.QUEUE} icon='list-alt' onClick={() => {this.props.updateTab(tabs.QUEUE)}}/>
        <KBNavBarButton active={this.props.currentTab === tabs.NOW_PLAYING} icon='volume-up' onClick={() => {this.props.updateTab(tabs.NOW_PLAYING)}}/>
        <KBNavBarSpacer width='4px'/>
        <KBNavBarButton active={this.props.isChatOpen} icon='comments' onClick={() => {this.props.toggleChat()}}/>
      </KBNavBar>
    )
  }
}

KBControlPanelNavBar.propTypes = {
  isMenuOpen: PropTypes.bool,
  currentTab: PropTypes.string,
  isChatOpen: PropTypes.bool,
  updateTab: PropTypes.func,
  toggleChat: PropTypes.func,
  toggleMenu: PropTypes.func,
}

export default KBControlPanelNavBar