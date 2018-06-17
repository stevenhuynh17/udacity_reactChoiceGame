import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleQuestions, handleUsers } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleQuestions())
    this.props.dispatch(handleUsers())
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
