import React from 'react';
import './common.css';
import {db} from '../helpers/firebase';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import {userAuth} from '../helpers/firebase';

class ChatChannel extends React.Component {
    constructor(props){
        super(props)

    }

    createChannel=()=>{
        this.props.history.push('/createChannel');
    }
    render(){
        return (
            <div className="chatChannel">
                Channel Chat Page
                <button onClick={this.createChannel}>create channel</button>
            </div>
        );
    }

}

export default ChatChannel;
