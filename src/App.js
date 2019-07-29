import React from 'react';
import logo from './logo.svg';
import './App.css';
import {db} from './firebase';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';
import intro from './components/intro';
import Login from './components/login';
import ChannelChat from './components/channelChat';
import DirectChat from "./components/directChat";
import RoleSelectPage from './components/selectRole';
import AirportSelectPage from './components/selectAirport';

class App extends React.Component {


  s=()=>{
    db.collection("sample")
        .onSnapshot(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          console.log(data); // array of cities objects
        });
  }
  render(){
    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={intro}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/channelChat" component={ChannelChat} />
                <Route exact path="/directChat" component={DirectChat} />
                <Route exact path="/selectRole" component={RoleSelectPage} />
                <Route exact path="/selectAirport" component={AirportSelectPage} />

                {/*<Route exact path="/chat" component={Chat} />*/}
            </Router>
        </div>
    );
  }

}

export default App;
