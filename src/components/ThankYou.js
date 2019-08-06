import React from 'react';
import './common.css';

class ThankYou extends React.Component {
    constructor(props) {
        super(props);
    }

    continue=()=>{
        this.props.history.push("/login")
    }
    render() {
        return (
            <div className="chatChannel">
                <button onClick={this.continue}>Continue</button>
            </div>
        )
    }

}


export default ThankYou;
