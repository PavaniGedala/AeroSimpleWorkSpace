import React from 'react';
import logo from './logo.svg';
import './App.css';
import {db} from './firebase';
import { BrowserRouter as Router, Route,withRouter } from 'react-router-dom';

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
        <div className="App" onClick={this.s}>
          hai
        </div>
    );
  }

}

export default App;
