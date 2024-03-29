import React from 'react';

import './common.css';
import {db} from '../helpers/firebase';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import {loginUser} from '../helpers/firebase'
import { Field, reduxForm } from 'redux-form'



class UserRegister extends React.Component {
    constructor(props){
        super(props);
    }

    login(){
        loginUser('saisasank001@gmail.com','1234',(res)=>{
            if(res.code=='auth/user-not-found'){
                alert('user doesnot exist')
            }else{
                this.props.history.push("/channelChat")
            }
        })
    }
    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <div>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                </div>
                <div>
                    <label>Last Name</label>
                    <div>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    <label>Sex</label>
                    <div>
                        <label>
                            <Field
                                name="sex"
                                component="input"
                                type="radio"
                                value="male"
                            />{' '}
                            Male
                        </label>
                        <label>
                            <Field
                                name="sex"
                                component="input"
                                type="radio"
                                value="female"
                            />{' '}
                            Female
                        </label>
                    </div>
                </div>
                <div>
                    <label>Favorite Color</label>
                    <div>
                        <Field name="favoriteColor" component="select">
                            <option />
                            <option value="ff0000">Red</option>
                            <option value="00ff00">Green</option>
                            <option value="0000ff">Blue</option>
                        </Field>
                    </div>
                </div>
                <div>
                    <label htmlFor="employed">Employed</label>
                    <div>
                        <Field
                            name="employed"
                            id="employed"
                            component="input"
                            type="checkbox"
                        />
                    </div>
                </div>
                <div>
                    <label>Notes</label>
                    <div>
                        <Field name="notes" component="textarea" />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        );
    }

}

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(UserRegister)
