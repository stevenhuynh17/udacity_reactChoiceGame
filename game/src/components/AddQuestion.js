import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class AddQuestion extends Component {
  render() {
    return(
      <div>
        <Nav />
        <form className="center question">
          <h3>Would you rather?</h3>
          <div>
            <span>Option 1: </span><input type="text"></input>
          </div>
          <div>
            <span>Option 2: </span><input type="text"></input>
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
