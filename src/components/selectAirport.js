import React from 'react';

import './common.css';

import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import {db} from "../helpers/firebase";

class AirportSelectPage extends React.Component {

    state={
        airports: [
                {
                    'id':'AJSJAJAS-asmkams',
                    'airportName':''
                }
            ]

    }
    constructor(props){
        super(props);
        db.collection("airports")
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return  {
                        data:doc.data(),
                        id:doc.id
                    }
                });
               this.setState({airports:data})
            });
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
                             <option value={data.id}>{data.data.airportName}</option>
                         }
                        })
                    }

                </select>
            </div>
        );
    }

}

export default AirportSelectPage;
