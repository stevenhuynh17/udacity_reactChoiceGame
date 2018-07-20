import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class Leaderboard extends Component {
  render() {
    const { data } = this.props
    // console.log(data)
    // console.log(Object.keys(data[0].answers).length, Object.keys(data[1].answers).length)
    const result = data.sort((a,b) => console.log('A:', Object.keys(a.answers).length, 'B:', Object.keys(b.answers).length))
    return(
      <div>
        <Nav />
        {data.map((value) => <p>{Object.keys(value.answers).length} | {value.name}</p>)}
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    data: Object.values(users)
      .sort((a,b) => Object.keys(b.answers).length - Object.keys(a.answers).length)
  }
}

export default connect(mapStateToProps)(Leaderboard)
