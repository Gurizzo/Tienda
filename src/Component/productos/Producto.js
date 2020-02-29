import React, { Component } from 'react';
import '../../App.css';
import {Card,Button,InputGroup,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Producto extends Component{

  constructor(props) {
    super(props);
    this.state = {
      name:props.data.name,
      photo:props.data.photo,
      description:props.data.description,
      price:props.data.price,
      count:0
    };
    
  }
  handleChange=(event,input)=>{ 
    console.log( input)   
    this.setState({
      [input]:event.target.value
    })
  }


render(){

  const {onShopClick}= (this.props);
  return(
    <div className="Producto"  >

    <Card style={{ width: '18rem', height:'25rem' }} >
    <Card.Img variant="top" src= {this.state.photo} style={{ width: '18rem', height:'10rem' }} />
    <Card.Body>
        <Card.Title>{this.state.name}</Card.Title>
      <Card.Text>
      {this.state.description}
      </Card.Text>

      <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Prepend  >
    <FormControl aria-describedby="basic-addon1" value={this.state.count} name="count" required onChange={(event)=>{this.handleChange(event,'count')}} />
  </InputGroup>

        <Button variant="primary" onClick={onShopClick}>${this.state.price}</Button>
    </Card.Body>
    </Card>

    </div>
  )}
}



export default Producto;


