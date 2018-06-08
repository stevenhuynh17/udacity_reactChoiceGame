import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveQuestions } from './questions'

export function handleInitialData() {
  return (dispatch) => {
    return _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
      })
  }
}
