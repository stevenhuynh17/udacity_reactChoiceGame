import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Nav from './Nav'

class Dashboard extends Component {
  render() {
    return(
      <div className="center">
        <Nav />
        <div>
          <h3>Unanswered Questions</h3>
          <h3>Answered Questions</h3>
        </div>
        <div>
          <ul>
            {this.props.data.map((id) => (
              <li key={id}>
                <Question id={id} />
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
    current: authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
