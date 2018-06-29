import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { authedUser } from '../actions/authedUser'

class Login extends Component {
  test = (e) => {
    e.preventDefault();
    this.props.dispatch(authedUser())
  }

  render() {
    const { data } = this.props

    return(
      <div>
        <form onSubmit={this.test}>
          <select className='dropdown' onChange={console.log(this.test)}>
          {data.map((user) => (
            <option key={user.id} value={user.name}>{user.name}</option>
          ))}
          </select>
          <Link to='/'>
            <input type='submit' value='Login' className='btn'/>
          </Link>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    data: Object.values(users),
    current: authedUser === null
  }
}

export default connect(mapStateToProps)(Login)
