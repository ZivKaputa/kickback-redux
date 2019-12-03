import React, { Component } from 'react'
import logo from './logo.svg'
import KBControlPanelContainer from './containers/KBControlPanelContainer'
import KBNavBar from './components/KBNavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

class App extends Component {
  render() {

    return (
      <div className="App">
        <KBNavBar type='primary'>Kickback</KBNavBar>
        <KBControlPanelContainer/>
        <ToastContainer
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
