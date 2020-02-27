import React, {Component} from 'react';
import {login} from "../Service/Services.js"
import ProductList from "../productos/index.js"
import Registro from "../Registro/Registro.js"


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  handleSubmit=(event)=>{ 
    debugger;
    event.preventDefault();
    login(this.state.user,this.state.password)
    .then(res=>{
      this.setState({
      login:true      
    })
    })
   
  }

  handleChange=(event,input)=>{ 
    
    this.setState({
      [input]:event.target.value
    })
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
    <span className="psw" >Register <a href="#">SignUp</a></span>
  </div>
</form>




      );
    }
  
}
 