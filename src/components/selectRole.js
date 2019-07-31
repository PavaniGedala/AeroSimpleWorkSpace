import React from 'react';

import './common.css';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';

class RoleSelectPage extends React.Component {
    state={
        roles: [
            {
                'id':'AJSJAJAS-asmkams',
                'roleName':'staff'
            }
        ]

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
