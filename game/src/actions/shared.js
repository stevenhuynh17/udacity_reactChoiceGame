import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'

export function handleQuestions() {
  return (dispatch) => {
    return _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
      })
  }
}

export function handleUsers() {
  return (dispatch) => {
    return _getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
      })
  }
}
