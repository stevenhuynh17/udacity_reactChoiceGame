import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { handleQuestions, handleUsers, handleAuth } from '../actions/shared'

import Dashboard from './Dashboard'
import Login from './Login'
import Answered from './Answered'
import Question from './Question'
import AddQuestion from './AddQuestion'
import Error from './Error'
import Leaderboard from './Leaderboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleQuestions())
    this.props.dispatch(handleUsers())
    this.props.dispatch(handleAuth())
  }

  render() {
    const { data } = this.props
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
          true
          ? <Component {...props} />
          : <Redirect to='/login'/>
        )}/>
    )

    return (
      <Router>
        <div className='container'>
          {this.props.data
            ? null
            : <Switch>
                <Route path='/login' component={Login}/>
                <PrivateRoute path='/' exact component={Dashboard}/>
                <PrivateRoute path='/questions/:id' component={Question}/>
                <PrivateRoute path='/add' component={AddQuestion}/>
                <PrivateRoute path='/leaderboard' component={Leaderboard}/>
                <Route component={Error}/>
              </Switch>
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    data: authedUser === true
  }
}

export default connect(mapStateToProps)(App);
