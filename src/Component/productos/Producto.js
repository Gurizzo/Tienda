import React, { Component } from 'react';
import '../../App.css';
import {Card,Button,Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Producto extends Component{

  constructor(props) {
    super(props);
    this.state = {
      name:props.data.name,
      photo:props.data.photo,
      description:props.data.description,
      price:props.data.price
    };
    
  }
render(){
  const {onShopClick}= this.props;
  return(
    <div className="Producto"  >

    <Card style={{ width: '18rem', height:'25rem' }} >
    <Card.Img variant="top" src= {this.state.photo} style={{ width: '18rem', height:'10rem' }} />
    <Card.Body>
        <Card.Title>{this.state.name}</Card.Title>
      <Card.Text>
      {this.state.description}
      </Card.Text>
        <Button variant="primary" onClick={onShopClick}>${this.state.price}</Button>
    </Card.Body>
    </Card>

    </div>
  )}
}



export default Producto;


