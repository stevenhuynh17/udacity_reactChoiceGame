import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    console.log(this.props.question)
    return(
      <div>

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
