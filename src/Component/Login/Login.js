import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form} from "react-bootstrap";

function handleSubmit(event) { //Accion del login
    alert("hola");
  }
function registrar(event){ //Accion de enlace.
  alert("Registro");
}

const Login = ({data}) =>((

<Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Correo electronico</Form.Label>
    <Form.Control type="email" placeholder="Ingresar email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Contraseña" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Recordar" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Conectar
  </Button>
  
  <Form onClick={registrar}>
  <Button variant="secundary" type="click">
  Registrar
</Button>
</Form>

</Form>
)
);


export default Login;