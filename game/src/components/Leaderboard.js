import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class Leaderboard extends Component {
  render() {
    const { data } = this.props

    console.log(data)
    return(
      <div>
        <Nav />
        {data.map((value) => {console.log(value.id)})}
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    data: Object.values(users)
  }
}

export default connect(mapStateToProps)(Leaderboard)
