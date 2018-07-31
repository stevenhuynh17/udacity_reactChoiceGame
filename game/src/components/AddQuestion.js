import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
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
  }

  render() {
    return(
      <div>
        <Nav />
        <form onSubmit={this.handleSubmit} className="center question">
          <h3>Would you rather?</h3>
          <div>
            <span>Option 1: </span><input type="text" name="optionOne" onChange={this.handleChange}></input>
          </div>
          <div>
            <span>Option 2: </span><input type="text" name="optionTwo" onChange={this.handleChange}></input>
          </div>
          <input type="submit" value="submit" className="btn" />
        </form>
      </div>
    )
  }
}

function mapStateToProps() {
  return {

  }
}

export default connect()(AddQuestion)
