import React from 'react';
import './common.css';

class GetUserName extends React.Component {
    constructor(props) {
        super(props);
    }

    changeText=(e)=>{
        console.log(e.target.value)
        sessionStorage.setItem('userName',e.target.value)

    }
    continue=()=>{
        this.props.history.push("/selectPhoto")
    }
    render() {
        return (
            <div className="chatChannel">
                <input onChange={(e)=>this.changeText(e)}/>
                <button onClick={this.continue}>Continue</button>
            </div>
        )
    }

}


export default GetUserName;
