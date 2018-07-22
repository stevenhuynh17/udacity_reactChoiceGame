import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helper'

class Question extends Component {
  render() {
    const { question, users } = this.props
    console.log(users)
    const { id, author, timestamp, optionOne, optionTwo } = question

    return(
      <div>
          <form>
            <label>
              <input type="radio" name="choice"/>
              {optionOne.text}
              <input type="radio" name="choice"/>
              {optionTwo.text}
            </label>
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
