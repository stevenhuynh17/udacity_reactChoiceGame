import { RECEIVE_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    // IMPORTANT FOR INITIAL STATE
    default:
      return state
  }
}
