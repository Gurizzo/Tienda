import React from 'react';
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Producto = ({data}) =>((

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="http://tiendaonline2020.herokuapp.com/img/mermarandanos.jpg" />
    <Card.Body>
      <Card.Title>Mermelada de Arándanos</Card.Title>
      <Card.Text>
      Mermelada de arándanos cosechados en el Himalaya, recolectadas manualmente.
      </Card.Text>
      <Button variant="primary">$1000</Button>
    </Card.Body>
  </Card>
  )
  );

export default Producto;


