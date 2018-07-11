export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function authedUser(id, bool) {
  return {
    type: SET_AUTHED_USER,
    status: bool,
    id
  }
}
