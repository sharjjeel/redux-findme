import { combineReducers } from 'redux'
import setUser from './setUser'
import { reducer as reduxFormReducer } from 'redux-form'

const todoApp = combineReducers({
  setUser,
  form : reduxFormReducer
})

export default todoApp
