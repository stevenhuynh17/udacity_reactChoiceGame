import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class Leaderboard extends Component {
  render() {
    const { data } = this.props

    console.log(Object.values(data[0].answers).length)
    return(
      <div>
        <Nav />
        {data.map((value) => <p>{value.id}</p>)}
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
