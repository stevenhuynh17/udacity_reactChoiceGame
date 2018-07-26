import React, { Component } from 'react'
import { connect } from 'react-redux'
import Unanswered from './Unanswered'
import Question from './Question'
import Nav from './Nav'

class Dashboard extends Component {
  componentDidMount() {
    this.setState({
      view: "questions"
    })
  }

  state = {
    view: ""
  }

  select_polls = (e) => {
    console.log(this.state.view)
    this.setState({
      view: "polls"
    })
    console.log(this.state.view)
  }

  select_questions = (e) => {
    console.log(this.state.view)
    this.setState({
      view: "questions"
    })
    console.log(this.state.view)
  }

  render() {
    const { questions, data } = this.props
    return(
      <div className="center">
        <Nav />
        <div>
          <h3 onClick={this.select_questions}>Unanswered Questions</h3>
          <h3 onClick={this.select_polls}>Answered Questions</h3>
        </div>
        <div>
          {this.state.view === "questions" && (
            <ul>
              {data.map((id) => (
                <li key={id}>
                  <Unanswered id={id} />
                </li>
              ))}
            </ul>
          )}
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
