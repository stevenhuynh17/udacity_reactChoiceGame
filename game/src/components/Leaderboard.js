import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class Leaderboard extends Component {
  render() {
    return(
      <div>
        <Nav />
      </div>
    )
  }
}

function mapStateToProps() {
  return {
    
  }
}

export default connect(mapStateToProps)(Leaderboard)
