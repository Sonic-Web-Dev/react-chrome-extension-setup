import deferredStateStorage from './utils/deferredStateStorage'
import defaultState from './defaults'

chrome.storage.local.get(storedState => {
  const storage = deferredStateStorage()
  let state

  setState({ ...defaultState, ...storedState })

  /**
   * Sync state.
   */
  function setState(newState) {
    if (chrome.browserAction.setIcon && (!state || state.enabled !== newState.enabled)) {
      chrome.browserAction.setIcon({
        path: newState.enabled ? 'assets/icon-128.png' : 'assets/icon-128-disabled.png'
      })
    }
    state = newState
  }

  chrome.runtime.onMessage.addListener(setState)

})

  