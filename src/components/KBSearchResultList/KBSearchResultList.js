import React, {Component} from 'react'
import KBSearchResult from '../KBSearchResult'
import PropTypes from 'prop-types'
import './KBSearchResultList.scss'

class KBSearchResultList extends Component {

  constructor(props) {
    super(props);
    this.rootRef = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    if (this.rootRef.current && this.props.scrollPosition) {
      this.rootRef.current.scrollTop = this.props.scrollPosition
    }
  }

  handleScroll() {
    this.props.onScroll(this.rootRef.current.scrollTop)
  }

  render() {

    if (!this.props.inSession) {
      return (
        <div id='kb-search-results' className="kb-empty-search-result">
          Join a session to add songs
        </div>
      )
    }

    if (!this.props.tracks || this.props.tracks.length == 0) {
      return (
        <div id='kb-search-results' className="kb-empty-search-result">
          No results
        </div>
      )
    }

    const trackList = this.props.tracks.map((track, index) =>
      <KBSearchResult
        key={index}
        track={track}
        onClick={this.props.onClick}
      />
    );

    return (
      <div onScroll={this.handleScroll} ref={this.rootRef} id='kb-search-results' className="list-group kb-search-result-list">
        {trackList}
      </div>
    )
  }
}

KBSearchResultList.propTypes = {
  tracks: PropTypes.array,
  onClick: PropTypes.func,
  onScroll: PropTypes.func,
  scrollPosition: PropTypes.number,
  inSession: PropTypes.bool
}

export default KBSearchResultList;