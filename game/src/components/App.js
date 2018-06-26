import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleQuestions, handleUsers } from '../actions/shared'
import Dashboard from './Dashboard'
import Login from './Login'
import Answered from './Answered'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Error from './Error'
import Leaderboard from './Leaderboard'

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
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/questions/:id' component={Question}/>
            <Route path='/add' component={NewQuestion}/>
            <Route path='/leaderboard' component={Leaderboard}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    // data: Object.values(questions)
  }
}

export default connect(mapStateToProps)(App);
