import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MDBIcon } from "mdbreact"
import './KBNowPlaying.scss'

class KBNowPlaying extends Component {
  render() {
    if (!this.props.item) {
      return (
          <div className='kb-now-playing'>
            <div className='kb-now-playing-empty'>
              No current song
            </div>
          </div>
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
              {this.props.item.artists.join(", ").substring(0,50)} • {this.props.item.album.substring(0,50)}
            </div>
          </div>
          {this.props.isAdmin ? (
            <div className='kb-now-playing-control-container'>
              <div className='flex-padding'/>
              <div className='kb-now-playing-button'>
                { this.props.isPlaying ? (
                  <span onClick={this.props.pause}><MDBIcon icon='pause'/></span>
                ) : (
                  <span onClick={this.props.play}><MDBIcon icon='play'/></span>
                )}
              </div>
              <div className='kb-now-playing-button'>
                <span onClick={this.props.skipSong}><MDBIcon icon='step-forward'/></span>
              </div>
              <div className='flex-padding'/>
            </div>
          ) : null }
        </div>
        <div className='flex-padding'/>
      </div>
    )
  }
}

KBNowPlaying.propTypes = {
  item: PropTypes.object,
  isAdmin: PropTypes.bool,
  isPlaying: PropTypes.bool,
  play: PropTypes.func,
  pause: PropTypes.func,
  skipSong: PropTypes.func
}

export default KBNowPlaying