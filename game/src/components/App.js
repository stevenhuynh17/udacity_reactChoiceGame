import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { data } = this.props
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default connect()(App);
