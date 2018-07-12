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
      <div>
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' exact activeClassName='active'>
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' exact activeClassName='active'>
                Add Question
              </NavLink>
            </li>
            <li>
              <button onClick={this.handleLogout} className='logout'>
                Logout
              </button>
            </li>
          </ul>
        </nav>
        <h5>Currently Logged In: {this.props.currentlyLoggedIn}</h5>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    currentlyLoggedIn: authedUser.id
  }
}

export default connect(mapStateToProps)(Nav)
