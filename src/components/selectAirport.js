import React from 'react';

import './common.css';

import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';

class AirportSelectPage extends React.Component {

    state={
        airports: [
                {
                    'id':'AJSJAJAS-asmkams',
                    'airportName':''
                }
            ]

    }
    getAirport(e){
        sessionStorage.setItem('airport',e);
        this.props.history.push("/selectRole")
    }
    render(){
        return (
            <div className="chatChannel">
                Select Airport
                <select onChange={(e)=>this.getAirport(e)}>
                    {
                        this.state.airports.map((data,index)=>{
                         return {
                             <option value={data.airportName}>{data.airportName}</option>
                         }
                        })
                    }

                </select>
            </div>
        );
    }

}

export default AirportSelectPage;
