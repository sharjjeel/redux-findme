import React from 'react'
import { connect } from 'react-redux'
import UserForm from '../components/UserForm'

let AddTodo = ({ dispatch }) => {
  return (
      <div>
        <UserForm dispatch={dispatch}/>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
