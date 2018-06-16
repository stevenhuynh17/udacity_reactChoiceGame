import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {
    console.log(this.props.data)
    return(
      <div>
        <h3>Questions</h3>
        <ul>
          {this.props.data.map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  console.log(Object.keys(questions))
  return {
    data: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions [a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
