import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import { handleAddQuestion } from '../actions/questions'

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    author: this.props.authedUser
  }

  componentDidMount() {
    this.setState({
      author:  this.props.authedUser
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.dispatch(handleAddQuestion(this.state))
  }

  render() {
    return(
      <div>
        <Nav />
        <form onSubmit={this.handleSubmit} className="center question">
          <h3>Would you rather?</h3>
          <div>
            <span>Option 1: </span>
            <input
              type="text"
              name="optionOne"
              onChange={this.handleChange}>
            </input>
          </div>
          <div>
            <span>Option 2: </span>
            <input
              type="text"
              name="optionTwo"
              onChange={this.handleChange}>
            </input>
          </div>
          <input type="submit" value="submit" className="btn" />
        </form>
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  console.log(authedUser)
  return {
    authedUser: authedUser.id
  }
}

export default connect(mapStateToProps)(AddQuestion)
