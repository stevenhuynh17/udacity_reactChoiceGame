import React, { Component } from 'react'
import { connect } from 'react-redux'
import Unanswered from './Unanswered'
import Question from './Question'
import Nav from './Nav'

class Dashboard extends Component {
  render() {
    const { questions, data } = this.props
    return(
      <div className="center">
        <Nav />
        <div>
          <h3>Unanswered Questions</h3>
          <h3>Answered Questions</h3>
        </div>
        <div>
          <ul>
            {data.map((id) => (
              <li key={id}>
                <Unanswered id={id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    data: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions [a].timestamp),
    current: authedUser,
    questions: questions
  }
}

export default connect(mapStateToProps)(Dashboard)
