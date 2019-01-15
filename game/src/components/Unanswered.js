import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helper'
import Question from './Question'

class Unanswered extends Component {
  render() {
    const { question, users, url } = this.props
    const { author, timestamp, optionOne, optionTwo } = question
    const { avatarURL, name } = users[author]

    return(
      <div className="container">
        <Link to={{
          pathname: `/questions/${url}`,
          state: {
            question: question
          }
        }}>
          <img src={avatarURL} className="profile img-responsive img-thumbnail rounded-circle" />
          <p>{name}</p>
          <p>{formatDate(timestamp)}</p>
          <br/>
          <p>{optionOne.text}</p>
          <p> vs</p>
          <p>{optionTwo.text}</p>
          <button className="btn btn-lg btn-outline-success">VOTE</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps({questions, users}, {url}) {
  const question = questions[url]
  return {
    question: question,
    users: users
  }
}

export default connect(mapStateToProps)(withRouter(Unanswered))
