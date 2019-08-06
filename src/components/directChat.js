import React from 'react';
import './common.css';
import './directChat.scss';
import {db} from '../helpers/firebase';
import uuid from 'uuid';

import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';

class DirectChat extends React.Component {
    state={
        profilePic:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg",
        displayName:"Vincent Porter",
        count:0,
        messages:[{
            displayName:'Doris bailey',
            message:'hello',
            timestamp:'2019-07-27T07:39:16.492Z',
            uid:'1234',
            class:'float-right'
        }]
    }
    sendBasicContent(e){
        let json={
            displayName:'Doris bailey',
                message:e,
            timestamp:new Date().toISOString(),
            uid:'1234',

        }
        console.log(json)
        db.collection("directChatMessages").doc(uuid()).set(json, { merge: true })
    }
    constructor(props){
        super(props);
        console.log(uuid());
        db.collection("directChatMessages")
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                   return  {
                        data:doc.data(),
                            id:doc.id
                    }
                });
                console.log(data); // array of cities objects
                this.updateChatData(data)
            });
    }

    updateChatData=(data)=>{
        let d=data.shift();
        console.log(d)
        this.setState({messages:d})
    }

    handleMessage=(e)=>{
        this.setState({
            message:e
            }
        )
    }

    render(){
        return (
            <div className="directChat">
                <div className="">


                    <div className="chat">
                        <div className="chat-header clearfix">
                            <img src="{this.state.profilePic}"
                                 alt="avatar"/>

                            <div className="chat-about">
                                <div className="chat-with">Chat with {this.state.displayName}</div>
                                <div className="chat-num-messages">already {this.state.messages.length} messages</div>
                            </div>
                            <i className="fa fa-star"></i>
                        </div>


                        <div className="chat-history">
                            <ul>

                                {
                                    this.state.messages && this.state.messages.length &&
                                        this.state.messages.map((rowdata, index) => {
                                            return (
                                                <li key={index}>
                                                    {
                                                        rowdata.data && <div>
                                                    <div className="message-data {data.class}">
                                                        <span className="message-data-time">{rowdata.data.timestamp}</span> &nbsp; &nbsp;
                                                        <span className="message-data-name">{rowdata.data.displayName}</span> <i
                                                        className="fa fa-circle me"></i>

                                                    </div>
                                                    <div className="message other-message float-right">
                                                        {rowdata.data.message}
                                                    </div>
                                                        </div>
                                                    }
                                                </li>
                                                )

                                })




                                }



                            </ul>

                        </div>


                        <div className="chat-message clearfix">
                            <textarea name="message-to-send" id="message-to-send" placeholder="Type your message"
                                      rows="3" onChange={this.handleMessage}></textarea>

                            <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                            <i className="fa fa-file-image-o"></i>

                            <button onClick={(e)=>this.sendBasicContent(e)}>Send</button>
)
                        </div>

                    </div>


                </div>


                <script id="message-template" type="text/x-handlebars-template">
                    <li className="clearfix">
                        <div className="message-data align-right">
                            <span className="message-data-time">12, Today</span> &nbsp; &nbsp;
                            <span className="message-data-name">Olia</span> <i className="fa fa-circle me"></i>
                        </div>
                        <div className="message other-message float-right">
                            output
                        </div>
                    </li>
                </script>

                <script id="message-response-template" type="text/x-handlebars-template">
                    <li>
                        <div className="message-data">
                            <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                            <span className="message-data-time">asd, Today</span>
                        </div>
                        <div className="message my-message">
                            message
                        </div>
                    </li>
                </script>

            </div>
        );
    }

}

export default DirectChat;
