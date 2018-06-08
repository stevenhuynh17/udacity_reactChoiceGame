import { RECEIVE_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      console.log("TESTING", action)
      return {
        ...state,
        ...action
      }
  }
}
