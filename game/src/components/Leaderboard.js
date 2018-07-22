import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class Leaderboard extends Component {
  calculate_top(data) {
    return Object.values(data)
      .sort((a,b) => Object.keys(b.answers).length - Object.keys(a.answers).length)
  }

  render() {
    const { data } = this.props
    const result = this.calculate_top(data)
    // {data.map((value) => <p key={value.id}>{Object.keys(value.answers).length} | {value.name}</p>)}
    return(
      <div>
        <Nav />
        {result.map((value) => <p>{value.id}</p>)}
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    data: users
  }
}

export default connect(mapStateToProps)(Leaderboard)
