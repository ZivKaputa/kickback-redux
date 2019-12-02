import React, { Component } from 'react'
import PropTypes from 'prop-types'
import KBQueueContainer from '../../containers/KBQueueContainer'
import KBNowPlayingContainer from '../../containers/KBNowPlayingContainer'
import KBSearchResultListContainer from '../../containers/KBSearchResultListContainer'
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

    return (
      <div className='kb-control-panel'>
        {mainTab}
      </div>
    )
  }

}

KBControlPanel.propTypes = {
}

export default KBControlPanel