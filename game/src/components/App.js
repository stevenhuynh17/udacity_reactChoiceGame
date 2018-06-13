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
        {console.log(data)}
        <p>{data['6ni6ok3ym7mf1p33lnez']}</p>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  optionOneText = questions[]
  optionTwoText = questions[]
  author = questions[]

  return {
    data: formatQuestion(optionOneText, optionTwoText, author)
  }
}

export default connect(mapStateToProps)(App);
