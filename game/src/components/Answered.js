import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helper'
import Poll from './Poll'

class Answered extends Component {
  render() {
    const { question, users, url } = this.props
    const { author, timestamp, optionOne, optionTwo } = question
    const { avatarURL, name } = users[author]

    return(
      <div className="question">
        <NavLink to={{
          pathname: `/poll/${url}`,
          state: {
            question: question
          }
        }}
          className="test"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-4">
                <div className="row align-items-center">
                  <div className="col-5">
                    <img src={avatarURL} className="profile img-responsive img-thumbnail rounded-circle" />
                  </div>
                  <div className="col-7">
                    <p>{name}</p>
                    <p>{formatDate(timestamp)}</p>
                  </div>
                </div>


              </div>
              <div className="col-6">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="row float-right">
                      <div className="pr-3">
                        <p>{optionOne.text}</p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p>vs</p>
                  </div>
                  <div className="col">
                    <p>{optionTwo.text}</p>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <button className="btn btn-lg btn-outline-info">VIEW</button>
              </div>

            </div>

          </div>
        </NavLink>
      </div>
    )
  }
}

function mapStateToProps({questions, users}, {url}) {
  const question = questions[url]
  return {
    question: question,
    users: users
  }
}

export default connect(mapStateToProps)(withRouter(Answered))
