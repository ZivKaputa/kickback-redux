import React, { Component } from 'react'
import PropTypes from 'prop-types'

class KBNowPlaying extends Component {
  render() {
    if (!this.props.item) {
      return (
        <div>NONE</div>
      )
    }
    return (
      <div>
        NOW PLAYING
        {this.props.item.name}
        <img src={this.props.item.album_image}/>
      </div>
    )
  }
}

KBNowPlaying.propTypes = {
  item: PropTypes.object
}

export default KBNowPlaying