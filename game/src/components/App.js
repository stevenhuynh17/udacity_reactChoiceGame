import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleQuestions, handleUsers } from '../actions/shared'
import Dashboard from './Dashboard'
import Nav from './Nav'
import Login from './Login'
import Answered from './Answered'
import Question from './Question'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleQuestions())
    this.props.dispatch(handleUsers())
  }

  render() {
    const { data } = this.props
    return (
      <Router>
        <div className='container'>
          <Login />
          <Nav />
          <Route path='/' exact component={Dashboard}/>
          <Route path='/questions/:id' component={Question}/>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    data: Object.values(questions)
  }
}

export default connect(mapStateToProps)(App);
