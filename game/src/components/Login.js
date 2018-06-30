import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { authedUser } from '../actions/authedUser'

class Login extends Component {
  handleChange = (e) => {
    // e.preventDefault();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(authedUser("TEST"))
    console.log(e.target.value)
  }

  render() {
    const { data, current } = this.props
    console.log(current)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <select value={"TEST"} onChange={this.handleChange} className='dropdown'>
          {data.map((user) => (
            <option key={user.id} value={user.name}>{user.name}</option>
          ))}
          </select>
          <input type='submit' value='Login' className='btn'/>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    data: Object.values(users),
    current: authedUser
  }
}

export default connect(mapStateToProps)(Login)
