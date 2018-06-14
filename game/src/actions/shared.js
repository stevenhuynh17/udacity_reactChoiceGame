import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveQuestions } from './questions'
// import { receiveUsers } from './users'

export function handleInitialData() {
  return (dispatch) => {
    return _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
        // dispatch(receiveQuestions(users))
      })
  }
}
