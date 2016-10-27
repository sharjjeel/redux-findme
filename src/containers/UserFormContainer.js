import React from 'react'
import { connect } from 'react-redux'
import UserForm from '../components/UserForm'
import {setUser }from '../actions'
let UserFormContainer = ({ dispatch }) => {
    const onSubmit = values =>
        new Promise(resolve => {
            setTimeout(() => {  // simulate server latency
                window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
                resolve()
            }, 500)
        })
  return (
      <div>
        <UserForm onSubmit={onSubmit}/>
      </div>
  )
}
UserFormContainer = connect()(UserFormContainer)

export default UserFormContainer
