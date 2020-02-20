import React from 'react';
import '../App.css';
import {Card,Button,Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Producto = ({data:{name,photo,description,price}}) =>((
    <div className="Producto" >

    <Card style={{ width: '18rem', height:'25rem' }} >
    <Card.Img variant="top" src= {photo} style={{ width: '18rem', height:'10rem' }} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
      <Card.Text>
      {description}
      </Card.Text>
        <Button variant="primary">${price}</Button>
    </Card.Body>
  </Card>

  </div>
  )
  );



export default Producto;


