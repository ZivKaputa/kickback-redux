import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SpotifyWebApi from 'spotify-web-api-node'

// Spotify Authorization variables
const authEndpoint = 'https://accounts.spotify.com/authorize'
const clientId = "c7068e47edfd40ce947f93adfc20eb96"
const redirectUri = "http://localhost:3000"
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "streaming"
]
const authorizeURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

// Spotify API object used to interact with songs
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  redirectUri: redirectUri
});

// Helper function to get hash parameters from redirect URI
// From https://stackoverflow.com/questions/11920697/how-to-get-hash-value-in-a-url-in-js
function getHashValue(key) {
  var matches = window.location.hash.match(new RegExp(key+'=([^&]*)'));
  return matches ? matches[1] : null;
}

// Wrapper component used to interact with Spotify and manage song playback
class KBSpotifyManager extends React.Component {

  constructor(props) {
    super(props)
    this.handleAuthorization = this.handleAuthorization.bind(this)
    this.playSong = this.playSong.bind(this)
    this.pauseSong = this.pauseSong.bind(this)
    this.checkAuthorization = this.checkAuthorization.bind(this)
  }

  checkAuthorization() {
    if (!this.props.accessToken) {
      this.handleAuthorization()
    }
  }

  handleAuthorization() {
    window.location = authorizeURL
  }

  playSong() {

  }

  pauseSong() {

  }

  render() {

    // Token request was succesful, parse token from URL
    const accessToken = getHashValue('access_token')
    if (accessToken) {
      this.props.updateAccessToken(accessToken)
      window.history.replaceState(null, null, '/')
      return null
    }


    // No token currently stored, need to request a new token
    if (!this.props.accessToken && this.props.playerActive) {
      this.handleAuthorization()
    }

    return null
  }

}


KBSpotifyManager.propTypes = {
  accessToken: PropTypes.string,
  updateAccessToken: PropTypes.func,
  playerActive: PropTypes.bool
}

export default KBSpotifyManager
