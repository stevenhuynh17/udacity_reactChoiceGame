import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav() {
  return (
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
          <NavLink to='/login' exact className='logout' activeClassName='active'>
            Logout
          </NavLink>
        </li>
      </ul>
      <h4>Currently Logged in: {this}</h4>
    </nav>
  )
}

function mapStateToProps({ authedUser }) {
  currentlyLoggedIn: authedUser.id
}

export default connect(mapStateToProps)(Nav)
