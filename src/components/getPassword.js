import React from 'react';
import './common.css';
import {db,registerUser} from "../helpers/firebase";

class GetPassword extends React.Component {
    state={
        type:'password',
        error:''
    }
    constructor(props) {
        super(props);

    }

    changeText=(e)=>{
        console.log(e.target.value)
        sessionStorage.setItem('password',e.target.value);
    }
    changeVisibility=()=>{
        if(this.state.type=='text'){
            this.setState({type:'password'})
        }else{
            this.setState({type:'text'})
        }
    }

    continue=()=>{
        let email=sessionStorage.getItem('email');
        let password=sessionStorage.getItem('password');
        registerUser(email,password, (res,flag)=> {
            console.log(flag)
            console.log(res)
            if(res.message){
                this.setState({error:res.message})
            }else{

                let json={
                    uid:res.user.uid,
                    email:sessionStorage.getItem('email'),
                    role:sessionStorage.getItem('role'),
                    airport:sessionStorage.getItem('airport'),
                    name:sessionStorage.getItem('userName'),
                    photo:sessionStorage.getItem('photo' )
                }
                console.log(json)
                db.collection('users').doc(res.user.uid).set(
                    json
                ).then(res=>{
                    this.props.history.push("/thankYou")
                })

            }
        })

    }
    render() {
        return (
            <div className="chatChannel">
                <input type={this.state.type} onChange={(e)=>this.changeText(e)}/>
                {this.state.error && <p>error - {this.state.error}</p>}
                {
                    this.state.type=='password' &&
                    <button onClick={this.changeVisibility}>show password</button>

                }
                {
                    this.state.type!='password' &&
                    <button onClick={this.changeVisibility}>hide password</button>

                } <button onClick={this.continue}>Continue</button>
            </div>
        )
    }

}


export default GetPassword;
