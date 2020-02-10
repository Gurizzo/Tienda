import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form} from "react-bootstrap";

function handleSubmit(event) { //Accion de registro
    alert("Registrado");
  }
  const Registro = ({data}) =>((

<Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Correo electronico</Form.Label>
    <Form.Control type="email" placeholder="Ingresar email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Contraseña" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Registrar
  </Button>
</Form>



  )
  );



  export default Registro;