import React from 'react';

import './common.css';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import {db} from "../helpers/firebase";

class RoleSelectPage extends React.Component {
    state={
        roles: [

        ]

    }

    constructor(props){
        super(props);
        db.collection("roles")
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
    getRole(e){
        sessionStorage.setItem('role',e.target.value);

    }

    continue=()=>{
        this.props.history.push("/selectUserName")
    }

    render(){
        return (
            <div className="chatChannel">
                Select Role
                <select onChange={(e)=>this.getRole(e)}>
                    <option value=''>Select Role</option>
                    {
                        this.state.roles.map((data,index)=>{
                            return(
                            <option value={data.id} key={index}>{data.data.roleName}</option>
                            )
                        })
                    }
                </select>
                <button onClick={this.continue}>Continue</button>
            </div>
        );
    }
}

export default RoleSelectPage;
