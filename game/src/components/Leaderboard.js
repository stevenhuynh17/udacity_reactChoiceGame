import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class Leaderboard extends Component {
  render() {
    const { question } = this.props
    const { id } = question
    return(
      <div>
        <Nav />
        { id }
      </div>
    )
  }
}

function mapStateToProps({questions}, {id}) {
  console.log(id)
  const question = questions[id]
  return {
    question: question
  }
}

export default connect(mapStateToProps)(Leaderboard)
