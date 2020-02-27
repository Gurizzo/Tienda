import React, { Component } from 'react';

class Carrito extends Component {

    
    render() {
        let listItems
       if(this.props.carrito.length>0){

        listItems = this.props.carrito.map((product) =>   
       <tr key={product._id}>
       <td><img src={product.photo} style={{ width: '5rem', height:'5rem' }} /> </td>
       <td>{product.name}</td>
       
       <td><input className="form-control" type="text" value="1" /></td>
    <td className="text-right">$ {product.price}</td>
       <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
       </tr> 
       );
    }

        return (
            <div>

<table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            
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
                            
                            <td>Sub-Total</td>
                            <td className="text-right">255,90 $</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                            <td>iva</td>
                            <td className="text-right">6,90 $</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className="text-right"><strong>346,90 $</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Carrito;

