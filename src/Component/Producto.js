import React from 'react';
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const name="Mermelada de Arándanos";
const photo= "http://tiendaonline2020.herokuapp.com/img/mermarandanos.jpg";
const description = "Mermelada de arándanos cosechados en el Himalaya, recolectadas manualmente.";
const price= "$1000";

const Producto = ({data:{name,photo,description,price}}) =>((
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {photo} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
      <Card.Text>
      {description}
      </Card.Text>
        <Button variant="primary">${price}</Button>
    </Card.Body>
  </Card>
  )
  );

export default Producto;


