// Thunk allows to write action creatores that return a function instead
// of an action
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import logger from './logger'

export default applyMiddleware(
  thunk,
  logger,
)
