import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import { MDBIcon } from "mdbreact"
import './KBQueueNowPlaying.scss'
import '../KBQueueItem/KBQueueItem.scss'

const DEFAULT_ALBUM_IMAGE = "http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png"

class KBQueueNowPlaying extends Component {

  render() {
    return (
      <div className='kb-queue-item kb-queue-now-playing'>
        <div className='kb-queue-item-container'>
          <div className='kb-queue-item-image-container'>
            <img className='kb-queue-item-image' src={this.props.track.album_image || DEFAULT_ALBUM_IMAGE}/>
          </div>
          <div className='kb-queue-item-info-container'>
            <div className='kb-queue-item-info-pad'/>
            <div className='kb-queue-item-name'>
              {this.props.track.name}
            </div>
            <div className='kb-queue-item-details'>
              {this.props.track.artists.join(", ")} • {this.props.track.album}
            </div>
            <div className='kb-queue-item-info-pad'/>
          </div>
          <div className='kb-queue-now-playing-label'>
            Now Playing
          </div>
        </div>
      </div>
    )
  }

}

KBQueueNowPlaying.propTypes = {
  track: PropTypes.object
}

export default KBQueueNowPlaying