import React from 'react';

import './common.css';
import {db} from '../helpers/firebase';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import {loginUser} from '../helpers/firebase'
import { Field, FieldArray, reduxForm, formValueSelector, change, untouch } from "redux-form";
import { connect } from "react-redux";
import {user} from '../stateManager/actions/user.action';


class CreateChannel extends React.Component {
    state={
        error:'',
        users:[]
    }
    constructor(props){
        super(props);

    }

    componentDidMount=()=> {

        db.collection("users")
            .where('airport','==',JSON.parse(localStorage.getItem('currentUserData'))['data']['airport'])
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return  {
                        data:doc.data(),
                        id:doc.id
                    }
                });
                console.log(data)
                this.setState({roles:data})
            });
    }

    login=(value)=>{
        const json=value;
        json['channelType']=this.state.type;
        json['users']=[]
    }

    register=()=>{
        this.props.history.push('/selectAirport');
    }

    changeType=(value)=> {

        this.setState({'type':value})
    }

    submit(value){
        console.log(value)
    }

    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;
        const renderButtonSwitcher = props => {
            return (
                <div>
                    <button onClick={props.onChange('public')}>
                        Public
                    </button>
                    <button onClick={props.onChange('private')}>
                        Private
                    </button>
                </div>
            )
        };

        return (
            <form onSubmit={handleSubmit(this.login)}>
                <div>
                    <label>Channel Name</label>
                    <div>
                        <Field
                            name="channelName"
                            component="input"
                            type="name"
                            placeholder="enter channel name"
                        />
                    </div>
                </div>
                <div>
                    <label>Channel Description</label>
                    <div>
                        <Field
                            name="channelDescription"
                            component="input"
                            type="textarea"
                            placeholder="enter description of channel"
                        />
                    </div>
                    <div>
                        {/*<Field*/}
                        {/*    name="channelType"*/}
                        {/*    component="renderbuttonswitcher"*/}
                        {/*/>*/}
                        <button onClick={()=>this.changeType('public')}>
                            Public {this.state.type && this.state.type=='public' && <p>selected</p>}
                        </button>
                        <button onClick={()=>this.changeType('private')}>
                            Private {this.state.type && this.state.type!='public' && <p>selected</p>}
                        </button>
                    </div>
                </div>

                <div>

                    <button type="submit" disabled={pristine || submitting}>
                        creat channel
                    </button>
                    {
                        <p>{this.state.error}</p>
                    }
                </div>
            </form>
        );
    }


}

CreateChannel=reduxForm({
    form: 'createchannel' // a unique identifier for this form
})(CreateChannel)

const selector = formValueSelector("createchannel");

const mapStateToProps = (state, props) => {

    const channelName=selector(state,"channelName");
    const channelDescription=selector(state,"channelDescription");
    const channelType=selector(state,"channelType");
    console.log(channelType);
    return{
        channelName,
        channelDescription,
        channelType
    }
}

export default connect(mapStateToProps, {
    user
})(CreateChannel)
