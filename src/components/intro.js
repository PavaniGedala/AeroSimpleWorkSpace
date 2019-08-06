import React from 'react';

import './common.css';
import {db} from '../helpers/firebase';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

class Intro extends React.Component {
    state={

    }

    constructor (props) {
        super(props);

    }

    login=()=>{

        this.props.history.push("/login")
    }

    register=()=>{
        this.props.history.push('/selectAirport');
    }

    render(){
        return (
            <div className="Intro">
                Intro page
                <button onClick={this.login}>Signin</button>
                <button onClick={this.register}>Signup</button>
            </div>
        );
    }

}

export default Intro;
