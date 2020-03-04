import React, { Component } from 'react';
import { signUp } from "../Service/Services.js"
import Login from '../Login/Login.js';
import {Form,Button} from 'react-bootstrap';


export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.done = false
    this.state={
      user:'',
      password:''
    }
   
  }

  handleSubmit = (event) => {

    event.preventDefault();
    signUp(this.state.user, this.state.password)
      .then(res => {
        if (res.status < 400) {
          alert("Usuario creado con exito");
          this.done = true;
          this.setState({
            user: this.state.user,
            password: this.state.password
          })
        
        }else{
          if(this.state.password.length<9){
            alert("Datos invalidos la contraseña debe contener al menos 9 caracteres")
          }else{
            alert("Datos invalidos")
          }
        }

      })
      .catch(error => console.error('Error:', error));

  }

  handleChange = (event, input) => {

    this.setState({
      [input]: event.target.value

    })
  }


  render() {

    if (this.done === false) {

      return (
        
        <div className="login">
          <h3>Registro</h3>
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
          Registrar
        </Button>
        
        <div className="registro">
      <a class="underlineHover" href="/">Volver</a>
    </div>
      </Form>

      </div>



      );
    }
    else {
      return (<Login />)

    }
  }
}



