/**
 * Created by sharjjeel on 10/25/16.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addTodo } from '../actions'

class UserForm extends Component {
    render() {
        const {dispatch} = this.props;
        const showResults = values => {
            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
            console.log("asdjnkas");
        }
        return (
            <form onSubmit={showResults}>
                <div>
                    <label htmlFor="userName">User Name </label>
                    <div>
                        <Field name="userName" component="input" type="text"/>
                    </div>
                    <label htmlFor="description">Contact Info </label>
                    <div>
                        <Field name="description" component="input" type="text"/>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

// Decorate the form component
UserForm = reduxForm({
    form: 'contact' // a unique name for this form
})(UserForm);

export default UserForm;
