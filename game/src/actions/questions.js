export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions(questions) {
  console.log("TESTING", questions)
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
