import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    const { data } = this.props
    const { id, name, avatarURL } = data
    return(
      <div>
        <form>
          <select className='dropdown'>
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

function mapStateToProps({ users }) {
  return {
    data: Object.values(users)
  }
}

export default connect(mapStateToProps)(Login)
