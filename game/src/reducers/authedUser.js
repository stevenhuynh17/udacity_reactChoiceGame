import { SET_AUTHED_USER } from '../actions/authedUser'

export default function users(state = {status: false}, action) {
  switch(action.type) {
    case SET_AUTHED_USER :
      console.log(action.status)
      return {
        id: action.id,
        status: action.status
      }
    default :
      return state
  }
}
