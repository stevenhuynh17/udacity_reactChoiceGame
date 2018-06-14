import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { formatQuestion } from '../utils/_DATA'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { data } = this.props
    return (
      <div className="App">
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {

  }
}

export default connect(mapStateToProps)(App);
