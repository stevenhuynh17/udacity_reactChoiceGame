import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helper'
import Nav from './Nav'

class Poll extends Component {
  render() {
    const { question = question ? question : this.props.location.state.question, users, id } = this.props
    const { author, timestamp, optionOne, optionTwo } = question
    const { avatarURL, name } = users[author]

    return(
      <div>
        <Nav />
        <div className="question">
          <img src={avatarURL} className="avatar" />
          <p>{name}</p>
          <p>{formatDate(timestamp)}</p>
          <button className="btn">VOTE</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({questions, users}, {id}) {
  const question = questions[id]
  return {
    question: question,
    users: users
  }
}

export default connect(mapStateToProps)(withRouter(Poll))
