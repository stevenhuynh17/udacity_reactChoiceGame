import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class Leaderboard extends Component {
  calculate_top(data) {
    return Object.values(data)
      .sort((a,b) => (this.calc_total(b) - this.calc_total(a)))
  }

  count_questions(user) {
    console.log(user.questions.length)
    return user.questions.length
  }

  count_answers(user) {
    console.log(Object.keys(user.answers).length)
    return Object.keys(user.answers).length
  }

  calc_total(user) {
    console.log(this.count_questions(user) + this.count_answers(user))
    return this.count_questions(user) + this.count_answers(user)
  }

  render() {
    const { data } = this.props
    const result = this.calculate_top(data)
    // {data.map((value) => <p key={value.id}>{Object.keys(value.answers).length} | {value.name}</p>)}
    return(
      <div>
        <Nav />
        {result.map((value) => <p>{value.id}{value.questions.length}{Object.keys(value.answers).length}</p>)}
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
