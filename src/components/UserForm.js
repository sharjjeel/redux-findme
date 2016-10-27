/**
 * Created by sharjjeel on 10/25/16.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class UserForm extends Component {
    render() {
        const {onSubmit} = this.props;
        return (
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="username">User Name</label>
                    <div>
                        <Field name="username" component="input" type="text"/>
                    </div>
                    <label htmlFor="description">Contact Info</label>
                    <div>
                        <Field name="description" component="input" type="text"/>
                    </div>
                </div>
                <button onClick={data => {console.log(data);}} type="submit">Submit</button>
            </form>
        );
    }
}

// Decorate the form component
UserForm = reduxForm({
    form: 'contact' // a unique name for this form
})(UserForm);

export default UserForm;
