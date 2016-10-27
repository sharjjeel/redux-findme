import React from 'react'
import { connect } from 'react-redux'
import UserForm from '../components/UserForm'

let ItemFormContainer = ({ dispatch }) => {
  return (
      <div>
        <ItemForm dispatch={dispatch}/>
      </div>
  )
}
ItemFormContainer = connect()(ItemFormContainer)

export default ItemFormContainer
