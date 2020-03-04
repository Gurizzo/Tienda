import React, {Component} from 'react';
import {login} from "../Service/Services.js"
import ProductList from "../productos/index.js"
import {Form,Button} from 'react-bootstrap';
import './Login.css';

//import Registro from "../Registro/Registro.js"


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      status:false
    }
      }

  handleSubmit=(event)=>{ 
    
    event.preventDefault();
    login(this.state.user,this.state.password)
    .then(res=>{
     
      if(res.status<400){
      console.log('Ingreso correcto')
      this.setState({status:true})}    
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
  
    if(!this.state.status){
      return (
<div className="login">
    <h3>Login</h3>
        <Form  onSubmit={(event)=>{this.handleSubmit(event)}}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="Ingresar correo electronico" value={this.state.user} name="uname" required onChange={(event)=>{this.handleChange(event,'user')}}/>
          <Form.Text className="text-muted">
        <br></br>
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder=" Ingresar contraseña" value={this.state.password} name="psw" required onChange={(event)=>{this.handleChange(event,'password')}} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
        
        <div className="registro">
      <a class="underlineHover" href="/Registro">Registrar</a>
    </div>
      </Form>


      </div>

  );}

  else{
    return(<ProductList status={this.state.status}/>)
    
  }
}
  
}
 