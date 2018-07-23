import React, { Component } from 'react';
import Header from '../components/Header'

export default class Setup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  render() {
    return (
      <p>this is a test page </p>
    )
  }
}
