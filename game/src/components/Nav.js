import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { authedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogout = (e) => {
    this.props.dispatch(authedUser())
  }

  render() {
    return (
      <navbar className="navbar fixed-top navbar-dark bg-primary navbar-expand-lg">
        <div className="container">
          <NavLink to='/' exact activeClassName='active' className="navbar-brand">
            Home
          </NavLink>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to='/leaderboard' exact activeClassName='active'>
                Leaderboard
              </NavLink>
              <NavLink className="nav-item nav-link" to='/add' exact activeClassName='active'>
                Add Question
              </NavLink>
            </div>
          </div>
          <div className="form-inline">
            <span className="navbar-text pr-4">Currently Logged In: {this.props.currentlyLoggedIn}</span>
            <button className="btn btn-danger" onClick={this.handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </navbar>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    currentlyLoggedIn: authedUser.id
  }
}

export default connect(mapStateToProps)(Nav)
