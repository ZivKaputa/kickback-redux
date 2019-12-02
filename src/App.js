import React, { Component } from 'react'
import logo from './logo.svg'
import KBControlPanelContainer from './containers/KBControlPanelContainer'
import KBNavBar from './components/KBNavBar'
import KBNavBarButton from './components/KBNavBarButton'
import KBNavBarSpacer from './components/KBNavBarSpacer'
import { ToastContainer } from 'react-toastify'
import {tabs} from './reducers/tab/current.js'
import KBSearchContainer from './containers/KBSearchContainer'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

class App extends Component {
  render() {

    const searchBar = this.props.currentTab === tabs.SEARCH ? <KBSearchContainer/> : null

    return (
      <div className="App">
        <KBNavBar type='primary'>Kickback</KBNavBar>
        <KBNavBar type='secondary'>
          {searchBar}
          <KBNavBarSpacer/>
          <KBNavBarButton active={this.props.currentTab === tabs.SEARCH} icon='search' onClick={() => {this.props.updateTab(tabs.SEARCH)}}/>
          <KBNavBarButton active={this.props.currentTab === tabs.QUEUE} icon='list-alt' onClick={() => {this.props.updateTab(tabs.QUEUE)}}/>
          <KBNavBarButton active={this.props.currentTab === tabs.NOW_PLAYING} icon='volume-up' onClick={() => {this.props.updateTab(tabs.NOW_PLAYING)}}/>
        </KBNavBar>
        <KBControlPanelContainer/>
        <ToastContainer
          style="kb-toast-container"
          toastClassName="kb-toast"
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable
          pauseOnHover={false}
        />
      </div>
    );
  }
}

export default App;
