import React, {Component} from 'react';
import {login} from "../Service/Services.js"
import ProductList from "../productos/index.js"
//import Registro from "../Registro/Registro.js"


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state={}
      }

  handleSubmit=(event)=>{ 
    
    event.preventDefault();
    login(this.state.user,this.state.password)
    .then(res=>{
     
      if(res.status<400){
      console.log('Ingreso correcto')
      this.setState({done:true})}    
    })
    .catch(error => {console.error('Error:', error)
      });
      
  }

  handleChange=(event,input)=>{ 
    
    this.setState({
      [input]:event.target.value
    })
  }

  render() { 
  
    if(!this.state.done){
      return (

    <form onSubmit={(event)=>{this.handleSubmit(event)}}>
      <h1>Bienvenido</h1>
      <h4>Login</h4>
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
    <span className="psw" >Register <a href="/Registro">SignUp</a></span>
  </div>
</form>

  );}

  else{
    return(<ProductList/>)
    
  }
}
  
}
 