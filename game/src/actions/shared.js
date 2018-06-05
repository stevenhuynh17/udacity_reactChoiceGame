import { _getUsers, _getQuestions } from '../utils/_DATA'

export function handleInitialData() {
  return (dispatch) => {
    return _getQuestions()
      .then((questions) => {
        console.log("TESTING")
        console.log(questions)
      })
  }
}
