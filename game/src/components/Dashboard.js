import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Unanswered from './Unanswered'
import Answered from './Answered'
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
      <div className="">
        <Nav />
        <div className="container">
            <ul className="nav nav-tabs justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#unanswered" onClick={this.select_questions} data-toggle="tab">
                  Unanswered Questions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#answered" onClick={this.select_polls} data-toggle="tab">
                  Answered Questions
                </a>
              </li>
            </ul>

        <div className="text-color">
          {this.state.view === "questions" && (
            <ul className="list-group">
              {data.map((id) => (
                <li className="list-group-item" key={id}>
                  <Unanswered url={id} id="unanswered"/>
                </li>
              ))}
            </ul>
          )}
          {this.state.view === "polls" && (
            <ul className="list-group">
              {data.map((id) => (
                <li className="list-group-item" key={id}>
                  <Answered url={id} id="answered"/>
                </li>
              ))}
            </ul>
          )}
        </div>
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
