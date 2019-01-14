import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helper'
import Poll from './Poll'

class Answered extends Component {
  render() {
    const { question, users, url } = this.props
    const { author, timestamp, optionOne, optionTwo } = question
    const { avatarURL, name } = users[author]

    return(
      <div className="question">
        <Link to={{
          pathname: `/poll/${url}`,
          state: {
            question: question
          }
        }}>
          <img src={avatarURL} className="avatar" />
          <p>{name}</p>
          <p>{formatDate(timestamp)}</p>
          <br/>
          <p>{optionOne.text}</p>
          <p> vs</p>
          <p>{optionTwo.text}</p>
          <button className="btn">VIEW</button>
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

export default connect(mapStateToProps)(withRouter(Answered))
