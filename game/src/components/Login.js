import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { authedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    value: 'Sarah Edo'
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(authedUser(this.state.value))
    return(
      <div>
        <p>TESTING</p>
      </div>
    )
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({value: e.target.value})
  }

  render() {
    const { data, current } = this.props

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange} className='dropdown'>
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
