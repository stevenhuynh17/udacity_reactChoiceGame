import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class Leaderboard extends Component {
  calculate_top(data) {
    return Object.values(data)
      .sort((a,b) => (this.calc_total(b) - this.calc_total(a)))
  }

  count_questions(user) {
    return user.questions.length
  }

  count_answers(user) {
    return Object.keys(user.answers).length
  }

  calc_total(user) {
    return this.count_questions(user) + this.count_answers(user)
  }

  render() {
    const { data } = this.props
    const result = this.calculate_top(data)
    // {data.map((value) => <p key={value.id}>{Object.keys(value.answers).length} | {value.name}</p>)}
    return(
      <div>
        <Nav />
        {result.map((value) => (
          <div key={value.id}>
            <img src={value.avatarURL} className="avatar"/>
            <p>{value.name}</p>
            <p>Created Questions: {this.count_questions(value)}</p>
            <p>Answered Questions: {this.count_answers(value)}</p>
            <p>Score: {this.calc_total(value)}</p>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    data: users
  }
}

export default connect(mapStateToProps)(Leaderboard)
