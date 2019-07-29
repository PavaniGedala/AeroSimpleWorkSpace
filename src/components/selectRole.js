import React from 'react';

import './common.css';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';

class RoleSelectPage extends React.Component {
    getRole(e){
        sessionStorage.setItem('role',e);
        this.props.history.push("/selectAirport")
    }
    render(){
        return (
            <div className="chatChannel">
                Select Role
                <select onChange={(e)=>this.getRole(e)}>
                    <option value="employee">Employee</option>
                </select>
            </div>
        );
    }
}

export default RoleSelectPage;
