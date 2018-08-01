import { RECEIVE_QUESTIONS, ADD_VOTE, ADD_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

    case ADD_QUESTION :
      console.log("THE ACTION: ", action)
      return {
        ...state,
        [action.question.id]: {
          ...action.question
        }
      }

    case ADD_VOTE :
      const { qid, answer, authedUser } = action

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid].optionOne.votes.includes(authedUser) || state[qid].optionTwo.votes.includes(authedUser)
              ? state[qid][answer].votes
              : state[qid][answer].votes.concat([authedUser])
          }
        }

      }
    // state[qid][answer].votes.filter((voter) => voter !== authedUser)
    // IMPORTANT FOR INITIAL STATE
    default:
      return state
  }
}
