import React from 'react';

import './common.css';

import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';

class AirportSelectPage extends React.Component {

    getAirport(e){
        sessionStorage.setItem('role',e);
        this.props.history.push("/selectRole")
    }
    render(){
        return (
            <div className="chatChannel">
                Select Airport
                <select onChange={(e)=>this.getAirport(e)}>
                    <option value="employee">Employee</option>
                </select>
            </div>
        );
    }

}

export default AirportSelectPage;
