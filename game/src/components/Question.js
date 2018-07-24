import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helper'

class Question extends Component {
  render() {
    const { question, users } = this.props
    const { author, timestamp, optionOne, optionTwo } = question
    const { avatarURL, name} = users[author]

    return(
      <div>
        <img src={avatarURL} className="avatar" />
        <p>{name}</p>
        <p>{formatDate(timestamp)}</p>
        <form>
          <input type="radio" name="choice" value={optionOne.text}/>
          {optionOne.text}
          <br/>
          <input type="radio" name="choice" value={optionTwo.text}/>
          {optionTwo.text}
          <br/>
          <input type="submit" value="Vote" className="btn" />
        </form>
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

export default connect(mapStateToProps)(Question)
