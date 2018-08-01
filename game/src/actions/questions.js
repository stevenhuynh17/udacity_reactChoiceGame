import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA.js'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_VOTE = 'ADD_VOTE'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(question) {
  const { optionOne, optionTwo, author } = question
  const optionOneText = optionOne
  const optionTwoText = optionTwo
  
  return (dispatch, getState) => {
    return _saveQuestion({
      author,
      optionOneText,
      optionTwoText
    })
  }
}

function addVote(qid, answer, authedUser) {
  console.log("Dispatched addVote", qid, answer, authedUser)
  return {
    type: ADD_VOTE,
    qid, answer, authedUser
  }
}

export function handleAddVote(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    console.log("Parameters for handleAddVote", authedUser, qid, answer)
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
    .then(() => dispatch(addVote(qid, answer, authedUser.id)))
  }
}
