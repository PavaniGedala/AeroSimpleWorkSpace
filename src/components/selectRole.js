import React from 'react';

import './common.css';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import {db} from "../helpers/firebase";

class RoleSelectPage extends React.Component {
    state={
        roles: [
            {
                'id':'AJSJAJAS-asmkams',
                'roleName':'staff'
            }
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
                this.setState({roles:data})
            });
    }
    getRole(e){
        sessionStorage.setItem('role',e);
        this.props.history.push("/selectAirport")
    }
    render(){
        return (
            <div className="chatChannel">
                Select Role
                <select onChange={(e)=>this.getRole(e)}>
                    {
                        this.state.roles.map((data,index)=>{
                            return {
                            <option value={data.roleName}>{data.roleName}</option>
                        }
                        })
                    }
                </select>
            </div>
        );
    }
}

export default RoleSelectPage;
