import React, {Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form} from "react-bootstrap";
import {login} from "../Service/Services.js"


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
        user:'',
        password:''
     
     }
  }

  handleSubmit=(event)=>{ 
    
    event.preventDefault();
    login(this.state.user,this.state.password)
    .then(res=>{
      debugger
    })
    //hacer login con el estado de password y user
  }

  handleChange=(event,input)=>{ 
    
    this.setState({
      [input]:event.target.value
    })
  }

 registrar(event){ //Accion de enlace.
  alert("Registro");
}

  render() { 
    
    
    return (

    <form onSubmit={(event)=>{this.handleSubmit(event)}}>
    <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeHolder="Enter Username" value={this.state.user} name="uname" required onChange={(event)=>{this.handleChange(event,'user')}}/>
    <br/>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeHolder="Enter Password" value={this.state.password} name="psw" required onChange={(event)=>{this.handleChange(event,'password')}}/>
    <br/>

    <button type="submit">Login</button>
  </div>

  <div className="container" Style="background-color:#f1f1f1">
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Register <a href="www.google.com">SignUp</a></span>
  </div>
</form>




      );
  }
}
 
 

