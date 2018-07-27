import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
// import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { handleQuestions, handleUsers, handleAuth } from '../actions/shared'

import Dashboard from './Dashboard'
import Login from './Login'
import Answered from './Answered'
import Question from './Question'
import AddQuestion from './AddQuestion'
import Error from './Error'
import Leaderboard from './Leaderboard'
import Poll from './Poll'
import Nav from './Nav'

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
          this.props.status
          ? <Component {...props} />
          : <Redirect to='/login'/>
        )}/>
    )

    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Switch>
              <Route path='/login' component={Login}/>
              <PrivateRoute path='/' exact component={Dashboard}/>
              <PrivateRoute path='/questions/:id' component={Question}/>
              <PrivateRoute path='/poll/:id' component={Poll}/>
              <PrivateRoute path='/add' component={AddQuestion}/>
              <PrivateRoute path='/leaderboard' component={Leaderboard}/>
              <Route component={Error}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    status: authedUser.status
  }
}

export default connect(mapStateToProps)(App);
