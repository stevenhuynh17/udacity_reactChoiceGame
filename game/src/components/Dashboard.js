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
      <div className="center">
        <Nav />
        <div>
          <nav className='nav'>
            <ul>
              <li>
                <NavLink to='' onClick={this.select_questions} exact activeClassName='active'>
                  Unanswered Questions
                </NavLink>
              </li>
              <li>
                <NavLink to='' onClick={this.select_polls} exact activeClassName='active'>
                  Answered Questions
                </NavLink>
              </li>
            </ul>
          </nav>
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
          {this.state.view === "polls" && (
            <ul>
              {data.map((id) => (
                <li key={id}>
                  <Answered id={id}/>
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
