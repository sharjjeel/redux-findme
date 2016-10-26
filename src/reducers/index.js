import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { reducer as reduxFormReducer } from 'redux-form'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  form : reduxFormReducer
})

export default todoApp
