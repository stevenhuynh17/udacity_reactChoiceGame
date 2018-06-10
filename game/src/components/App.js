import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { data } = this.props
    return (
      <div className="App">
        {console.log(data)}
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    data: questions
  }
}

export default connect(mapStateToProps)(App);
