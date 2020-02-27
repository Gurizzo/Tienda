import React, { Component } from 'react';

class Carrito extends Component {

constructor(props) {
    super(props);
    this.state = {
        carrito:props.props
    };
let listItems= [];
    
    
   //Realiza el filtrado y valida undefined 
   console.log("carrito: "+ this.state.carrito);
}

    
    render() {
        let listItems
       if(this.state.carrito.length>0){
        listItems = this.state.carrito.map((product) =>   
       <tr key={product._id}>
       <td><img src={product.photo} style={{ width: '5rem', height:'5rem' }} /> </td>
       <td>{product.name}</td>
       <td>In stock</td>
       <td><input className="form-control" type="text" value="1" /></td>
    <td className="text-right">$ {product.price}</td>
       <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
       </tr> );}
        return (
            <div>

<table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            <th scope="col">Available</th>
                            <th scope="col" className="text-center">Quantity</th>
                            <th scope="col" className="text-right">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Sub-Total</td>
                            <td className="text-right">255,90 €</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Shipping</td>
                            <td className="text-right">6,90 €</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className="text-right"><strong>346,90 €</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Carrito;

