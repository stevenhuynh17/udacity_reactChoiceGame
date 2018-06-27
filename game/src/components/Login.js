import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Login extends Component {
  test = (e) => {
    <Link to="/"></Link>
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
          <input type='submit' value='Login' className='btn'/>
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
