import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './KBSearchResult.scss'

const DEFAULT_ALBUM_IMAGE = "http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png";

class KBSearchResult extends Component {
  render() {
    return (
      <div className='kb-search-result' onClick={() => this.props.onClick(this.props.track)}>
        <div className='kb-search-result-image-container'>
          <img className='kb-search-result-image' src={this.props.track.album_image || DEFAULT_ALBUM_IMAGE}/>
        </div>
        <div className='kb-search-result-info-container'>
          <div className='kb-search-result-info-pad'/>
          <div className='kb-search-result-name'>
            {this.props.track.name}
          </div>
          <div className='kb-search-result-details'>
            {this.props.track.artists.join(", ")} • {this.props.track.album}
          </div>
          <div className='kb-search-result-info-pad'/>
        </div>
      </div>
    )
  }
}

KBSearchResult.propTypes = {
  track: PropTypes.object,
  onClick: PropTypes.func
}

export default KBSearchResult;