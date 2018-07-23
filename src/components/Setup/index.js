import React, { Component } from 'react';


export default class Setup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  render() {
    return (
      <p>This is a test page that can be opened in its own window or iframe </p>
    )
  }
}
