import React, {Component} from 'react';
import {signUp} from "../Service/Services.js"


export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
     }
  }

  handleSubmit=(event)=>{ 
    
    event.preventDefault();
    signUp(this.state.user,this.state.password)
    .then(res=>{
      alert('registro hecho!!')
    })
    //hacer login con el estado de password y user
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
    <h3>Registro</h3>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeHolder="Enter Username" value={this.state.user} name="uname" required onChange={(event)=>{this.handleChange(event,'user')}}/>
    <br/>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeHolder="Enter Password" value={this.state.password} name="psw" required onChange={(event)=>{this.handleChange(event,'password')}}/>
    <br/>

    <button type="submit">Registro</button>
  </div>

  <div className="container" Style="background-color:#f1f1f1">
    <button type="button" className="cancelbtn">Cancel</button>
  </div>
</form>




      );
  }
}
 
 

