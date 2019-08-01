import React from 'react';
import logo from './logo.svg';
import './common.css';
import {db} from './firebase';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';

class UserPhoto extends React.Component {
    render(){
        return (
            <div className="chatChannel">
                Channel Page
            </div>
        );
    }

}

export default UserPhoto;
