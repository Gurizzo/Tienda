import React from 'react';
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



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


