import { RECEIVE_QUESTIONS, ADD_VOTE } from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

    case ADD_VOTE :
      console.log("THE ACTION: ", action)
      const { qid, answer, authedUser } = action
      // console.log(qid, answer, authedUser)

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }

      }
    // state[qid][answer].votes.filter((voter) => voter !== authedUser)
    // IMPORTANT FOR INITIAL STATE
    default:
      return state
  }
}
