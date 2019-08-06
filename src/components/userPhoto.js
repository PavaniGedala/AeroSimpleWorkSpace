import React from 'react';
import './common.css';
import {storage} from '../helpers/firebase';

class GetUserPhoto extends React.Component {
    state={
        disabled:true
    }
    constructor(props) {
        super(props);
    }

    changeFile=(e)=>{
        let file = e.target.files[0];
        let mainImage=storage.child(e.target.files[0].name);
        mainImage.put(file).then((snapshot)=>{
            mainImage.getDownloadURL().then(url=>{
                console.log(url);
                sessionStorage.setItem('photo',url);
                 this.setState({disabled:false})
            })
        });
        // let reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onloadend = () => {
        //     sessionStorage.setItem('photo',reader.result);
        //     this.setState({disabled:false})
        //
        // };
    }

    continue=()=>{
        this.props.history.push("/selectEmail")
    }

    render() {
        return (
            <div className="chatChannel">
                <input type="file" onChange={(e)=>this.changeFile(e)}/>
                <a onClick={this.continue}>skip</a>
                <button disabled={this.state.disabled} onClick={this.continue}>Continue</button>
            </div>
        )
    }

}


export default GetUserPhoto;
