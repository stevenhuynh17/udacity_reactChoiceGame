import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helper'
import Nav from './Nav'

class Question extends Component {
  state = {
    selected: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.selected)
  }

  handleChange = (e) => {
    this.setState({
      selected: e.target.value
    })
  }

  render() {
    const { question = question ? question : this.props.location.state.question, users, id } = this.props
    const { author, timestamp, optionOne, optionTwo } = question
    const { avatarURL, name } = users[author]

    return(
        <div>
        <Nav />
        <div className="question">
          <img src={avatarURL} className="avatar" />
          <div>
            <p>{name}</p>
            <p>{formatDate(timestamp)}</p>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input type="radio" name="choice" value={optionOne.text} onChange={this.handleChange}/>
                {optionOne.text}
              </label>
              <br/>
              <label>
                <input type="radio" name="choice" value={optionTwo.text} onChange={this.handleChange}/>
                {optionTwo.text}
              </label>
              <br/>
              <input type="submit" value="Vote" className="btn" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({questions, users}, {id}) {
  const question = questions[id]
  return {
    question: question,
    users: users
  }
}

export default connect(mapStateToProps)(Question)
