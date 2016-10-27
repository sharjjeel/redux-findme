/**
 * Created by sharjjeel on 10/26/16.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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
                    <label htmlFor="name">Name</label>
                    <div>
                        <Field name="name" component="input" type="text"/>
                    </div>
                    <label htmlFor="description">Description</label>
                    <div>
                        <Field name="description" component="textarea"/>
                    </div>
                    <label htmlFor="location">Location</label>
                    <div>
                        <Field name="location" component="input" type="text"/>
                    </div>

                    <label>Lost or Found</label>
                    <div>
                        <label><Field name="lost" component="input" type="radio" value="lost"/> Lost</label>
                        <label><Field name="found" component="input" type="radio" value="found"/> Found</label>
                    </div>

                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

// Decorate the form component
UserForm = reduxForm({
    form: 'item' // a unique name for this form
})(UserForm);

export default UserForm;
