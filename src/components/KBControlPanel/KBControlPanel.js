import React, { Component } from 'react'
import PropTypes from 'prop-types'
import KBQueueContainer from '../../containers/KBQueueContainer'
import KBNowPlayingContainer from '../../containers/KBNowPlayingContainer'
import KBSearchResultListContainer from '../../containers/KBSearchResultListContainer'
import KBControlPanelNavBarContainer from '../../containers/KBControlPanelNavBarContainer'
import KBMenuContainer from '../../containers/KBMenuContainer'
import {tabs} from '../../reducers/tab/current.js'
import './KBControlPanel.scss'


export class KBControlPanel extends Component {

  render() {

    var mainTab = undefined
    switch (this.props.currentTab) {
      case tabs.SEARCH:
        mainTab = <KBSearchResultListContainer/>
        break
      case tabs.QUEUE:
        mainTab = <KBQueueContainer/>
        break
      case tabs.NOW_PLAYING:
        mainTab = <KBNowPlayingContainer/>
        break
      default:
        mainTab = <div> Error </div>
        break
    }

    const menu = this.props.isMenuOpen ? <KBMenuContainer/> : null
    const chat = this.props.isChatOpen ? <div className='kb-right-control'/> : null

    return (
      <div className='kb-control-panel'>
        {menu}
        <div className='kb-center-control'>
          <KBControlPanelNavBarContainer/>
          {mainTab}
        </div>
        {chat}
      </div>
    )
  }

}

KBControlPanel.propTypes = {
  currentTab: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  isChatOpen: PropTypes.bool
}

export default KBControlPanel