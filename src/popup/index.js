import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Footer from '../components/Footer'



export default class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enabled: props.enabled,
    }

    chrome.runtime.onMessage.addListener(this.stateWasUpdatedFromBackground)
  }

  enableSwitchWasChanged = () => {
  //  this.setState(prevState => ({ enabled: !prevState.enabled }), this.stateWasUpdatedFromUI)
  }

  /**
   * Sync every UI state change with local storage and background process.
   */
  stateWasUpdatedFromUI = () => {
    chrome.storage.local.set(this.state)
    chrome.runtime.sendMessage(this.state)
  }

  /**
   * Receive state changes from background process and update UI.
   */
  stateWasUpdatedFromBackground = newState => {
    this.setState(newState)
  }

  render() {
    return (
      <Router>
        <div>
          <Header enabled={this.state.enabled} onChange={this.enableSwitchWasChanged} />
          <Route
            exact
            path="/"
            render={() => (
              <Home
                {...this.state}
              />
            )}
          />
          <Footer />
        </div>
      </Router>
    )
  }
}
