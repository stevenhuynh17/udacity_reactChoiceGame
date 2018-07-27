import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helper'
import Nav from './Nav'

class Poll extends Component {
  calc_percent = (optionOne, optionTwo) => {
    const val_1 = optionOne.votes.length
    const val_2 = optionTwo.votes.length
    const total = val_1 + val_2

    return {
      first: (val_1 / total) * 100,
      second: (val_2 / total) * 100
    }
  }

  render() {
    const { question = question ? question : this.props.location.state.question, users, id } = this.props
    const { author, timestamp, optionOne, optionTwo } = question
    const { avatarURL, name } = users[author]

    const result = this.calc_percent(optionOne, optionTwo)

    return(
      <div>
        <Nav />
        <div className="question">
          <img src={avatarURL} className="avatar" />
          <p>{name}</p>
          <p>{formatDate(timestamp)}</p>
          <br/>
          <p>{optionOne.text}</p>
          <p>Votes: {optionOne.votes.length} - {result.first}%</p>
          <p>{optionTwo.text}</p>
          <p>Votes: {optionTwo.votes.length} - {result.second}%</p>
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
