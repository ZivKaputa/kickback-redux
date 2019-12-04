import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MDBIcon } from "mdbreact"
import './KBNowPlaying.scss'

class KBNowPlaying extends Component {
  render() {
    if (!this.props.item) {
      return (
          <div className='kb-now-playing'> Nothing is playing. </div>
      )
    }
    return (
      <div className='kb-now-playing'>
        <div className='flex-padding'/>
        <div className='kb-now-playing-panel'>
          <div className='kb-now-playing-image-container'>
            <img className='kb-now-playing-image' src={this.props.item.album_image}/>
          </div>
          <div className='kb-now-playing-info-container'>
            <div className='kb-now-playing-title'>
              {this.props.item.name}<br/>
            </div>
            <div className='kb-now-playing-artist-album-info'>
              {this.props.item.artists.join(", ")} • {this.props.item.album}
            </div>
          </div>
          <div className='kb-now-playing-control-container'>
            <div className='flex-padding'/>
            <div className='kb-now-playing-button'>
              <MDBIcon icon='pause'/>
            </div>
            <div className='kb-now-playing-button'>
              <MDBIcon icon='step-forward'/>
            </div>
            <div className='flex-padding'/>
          </div>
        </div>
        <div className='flex-padding'/>
      </div>
    )
  }
}

KBNowPlaying.propTypes = {
  item: PropTypes.object
}

export default KBNowPlaying