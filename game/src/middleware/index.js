// Thunk allows to write action creatores that return a function instead
// of an action
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk,
)
