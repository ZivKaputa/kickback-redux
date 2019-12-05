import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SpotifyWebApi from 'spotify-web-api-node'

// Spotify Authorization variables
const authEndpoint = 'https://accounts.spotify.com/authorize'
const clientId = "c7068e47edfd40ce947f93adfc20eb96"
// const redirectUri = "http://localhost:3000"
const redirectUri = "https://zivkaputa.github.io/kickback-redux"
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

// Uses the specified player to play the given track
const play = ({
  spotify_uri,
  playerInstance: {
    _options: {
      getOAuthToken,
      id
    }
  }
}) => {
  getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [spotify_uri] }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    });
  });
};

// Wrapper component used to interact with Spotify and manage song playback
class KBSpotifyManager extends React.Component {

  constructor(props) {
    super(props)
    this.handleAuthorization = this.handleAuthorization.bind(this)
    this.playSong = this.playSong.bind(this)
    this.pauseSong = this.pauseSong.bind(this)
    this.checkAuthorization = this.checkAuthorization.bind(this)
    this.initializePlayer = this.initializePlayer.bind(this)
    this.player = null
    this.fresh = true
    this.lastSong = null;
  }

  checkAuthorization() {
    if (!this.props.accessToken) {
      this.handleAuthorization()
    }
  }

  handleAuthorization() {
    window.location = authorizeURL
  }

  initializePlayer() {
    var player = new window.Spotify.Player({
      name: 'Kickback Player',
      getOAuthToken: callback => {
        callback(this.props.accessToken)
      },
      volume: 0.5
    })

    player.addListener('ready', ({ device_id }) => {
      this.player = player
    })

    player.addListener('player_state_changed', spotifyPlayerState => {
      if (spotifyPlayerState.position === 0 && spotifyPlayerState.paused && this.props.isPlaying) {
        if (this.props.currentTrack && (this.lastSong != this.props.currentTrack.id)) {
          this.lastSong = this.props.currentTrack.id
          this.props.skipSong()
        }
      }
    })

    player.connect().then(success => {
      if (success) {
        console.log('The Web Playback SDK successfully connected to Spotify!')
      }
    })
  }

  playSong(uri, playFromStart) {

    if (playFromStart) {
      play({
        playerInstance: this.player,
        spotify_uri: uri
      })
    } else {
      this.player.resume().then(() => {
        console.log('Resumed!');
      })
    }

  }

  pauseSong() {
    this.player.pause().then(() => {
      console.log('Paused!');
    });
  }

  shouldComponentUpdate(nextProps, nextState) {

    if (this.player && (!nextProps.currentTrack || !this.props.playerActive)) {
      this.pauseSong()
      this.props.setPaused()
    } else if (this.player && this.props.playerActive) {
      // Load a new song
      let isNewSong = (!nextProps.currentTrack || !this.props.currentTrack || (nextProps.currentTrack.id != this.props.currentTrack.id))
      if (isNewSong) {
        this.fresh = true
      }
      if (nextProps.isPlaying && nextProps.currentTrack && (isNewSong || this.fresh)) {
        this.playSong(nextProps.currentTrack.uri, true)
        this.fresh = false;
      // Continue current song
      } else if (nextProps.currentTrack && nextProps.isPlaying) {
        this.playSong(null, false)
      // Pause current song
      } else if (nextProps.currentTrack && !nextProps.isPlaying) {
        this.pauseSong()
      }
    }
    return true;
  }

  render() {

    if (this.props.playerActive) {

      if (window.Spotify && !this.player) {
        this.initializePlayer()
      } else if (!window.Spotify && !this.player) {
        window.onSpotifyWebPlaybackSDKReady = () => {
          this.initializePlayer()
        }
      }

      // Token request was succesful, parse token from URL
      const accessToken = getHashValue('access_token')
      if (accessToken) {
        this.props.updateAccessToken(accessToken)
        window.history.replaceState(null, null, '/kickback-redux')
        return null
      }


      // No token currently stored, need to request a new token
      if (!this.props.accessToken && this.props.playerActive) {
        this.handleAuthorization()
      }

    }

    return null
  }

}


KBSpotifyManager.propTypes = {
  accessToken: PropTypes.string,
  updateAccessToken: PropTypes.func,
  playerActive: PropTypes.bool,
  currentTrack: PropTypes.object,
  isPlaying: PropTypes.bool,
  skipSong: PropTypes.func,
  setPaused: PropTypes.func
}

export default KBSpotifyManager
