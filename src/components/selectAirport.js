import React from 'react';

import './common.css';

import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import {db} from "../helpers/firebase";

class AirportSelectPage extends React.Component {

    state={
        airports: [
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
                console.log(data)
               this.setState({airports:data})
            });
    }
    getAirport(e){
        sessionStorage.setItem('airport',e.target.value);

    }
    continue=()=>{
        this.props.history.push("/selectRole")
    }
    render(){
        return (
            <div className="chatChannel">
                Select Airport
                <select onChange={(e)=>this.getAirport(e)}>
                    <option value=''>Select Aiport</option>
                    {
                        this.state.airports.map((data,index)=>{
                         return (
                             <option key={index} value={data.id}>{data.data.airportName}</option>
                         )

                        })

                    }

                </select>
                <button onClick={this.continue}>Next</button>
            </div>
        );
    }

}

export default AirportSelectPage;
