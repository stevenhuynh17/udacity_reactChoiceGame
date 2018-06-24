import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    const { data } = this.props

    return(
      <div>
        <form>
          <select className='dropdown' onChange={console.log("TESTING 123")}>
          {data.map((user) => (
            <option key={user.id}>{user.name}</option>
          ))}
          </select>
          <button className='btn'>Login</button>
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
