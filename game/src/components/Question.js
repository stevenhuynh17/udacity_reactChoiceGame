import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helper'

class Question extends Component {
  render() {
    const { question } = this.props
    const { id, author, timestamp, optionOne, optionTwo } = question

    return(
      <div>
        <div>
          <p>{author}</p>
          <p>{formatDate(timestamp)}</p>
          <div onClick={(e) => console.log("JOANNE SUCKS")}>{optionOne.text}</div>
          <span> vs </span>
          <div onClick={(e) => console.log("VIVIAN SUCKS")}>{optionTwo.text}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({questions}, {id}) {
  const question = questions[id]

  return {
    question: question
  }
}

export default connect(mapStateToProps)(Question)
