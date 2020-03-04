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
      count:1
      
    };
    
  }
  handleChange=(event,input)=>{ 
    
    console.log("aca: "+input)
    this.setState({
      [input]:parseInt(event.target.value)
    })
  }



render(){

  const {onShopClick}= (this.props);
  return(
    <div className="Producto"  >

    <Card style={{ width: '18rem', height:'30rem' }} >
    <Card.Img variant="top" src= {this.state.photo} style={{ width: '18rem', height:'10rem' }} />
    <Card.Body>
        <Card.Title>{this.state.name}</Card.Title>
      <Card.Text>
      {this.state.description}
      </Card.Text>
       <strong>Precio Unitario <p>${this.state.price}</p></strong>
       <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant="outline-secondary" onClick={() => onShopClick(this.props.data,this.state.count)}>Añadir al carrito</Button>
    </InputGroup.Prepend  >
    
    <FormControl type="number" aria-describedby="basic-addon1" value={this.state.count} name="count" required onChange={(event)=>{this.handleChange(event,'count')}} />
  </InputGroup>
      <InputGroup className="mb-3">
     
    
  </InputGroup>

        
    </Card.Body>
    </Card>

    </div>
  )}
}



export default Producto;


