import React from 'react';

import './common.css';
import {db} from '../helpers/firebase';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import {loginUser} from '../helpers/firebase'
import { Field, FieldArray, reduxForm, formValueSelector, change, untouch } from "redux-form";
import { connect } from "react-redux";
import {user} from '../stateManager/actions/user.action';


class Login extends React.Component {
    state={
        error:''
    }
    constructor(props){
        super(props);
    }

    login=(value)=>{
        loginUser(value.username,value.password,(res)=>{
            if(res.code=='auth/user-not-found'){
                this.setState({error:'user doesnot exist'})
            }else{
                this.props.history.push("/channelChat")
            }
        })
    }

    submit(value){
        console.log(value)
    }

    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <form onSubmit={handleSubmit(this.login)}>
                <div>
                    <label>Username</label>
                    <div>
                        <Field
                            name="username"
                            component="input"
                            type="email"
                            placeholder="username"
                        />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <Field
                            name="password"
                            component="input"
                            type="text"
                            placeholder="enter password"
                        />
                    </div>
                </div>

                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    {
                        <p>{this.state.error}</p>
                    }
                </div>
            </form>
        );
    }

}

Login=reduxForm({
    form: 'login' // a unique identifier for this form
})(Login)

const selector = formValueSelector("login");

const mapStateToProps = (state, props) => {

    const username = selector(state, "username");
    const password = selector(state, "password");

    return{
        username,
        password
    }
}

export default connect(mapStateToProps, {
    user
})(Login)
