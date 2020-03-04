import React, { Component } from 'react';
import { countCartTotalAmount, countCartItems, DeleteItem } from '../../../Util/Util';
import './Carrito.css';

class Carrito extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

 



    render() {
        const {onDeleteItemClick}=(this.props)
        let cantidadProductos = countCartItems(this.props.carrito);
        let subTotal = countCartTotalAmount(this.props.carrito);
        let listItems

        if (this.props.carrito.length > 0) {
            
            listItems = this.props.carrito.map((product) =>
            
                <tr key={product._id}>
                    
                    <td>{product.name}</td>

                    <td>{product.count}</td>
                    <td className="text-right">$ {product.price}</td>
                    <td className="text-right">
                        <button className="btn btn-sm btn-danger" onClick={() => onDeleteItemClick(product)}>Eliminar</button>
                    </td>
                </tr>
            );
        }

        return (
            <div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            
                            <th scope="col">Producto</th>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th scope="col" className="text-right">Precio</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                        <tr>
                            
                            <td><strong>Cantidad productos</strong></td>
                            <td><strong>{cantidadProductos}</strong></td>
                            <td><strong>Sub-Total</strong></td>
                            <td className="text-right"><strong>${parseFloat(subTotal).toFixed(2)}</strong></td>
                        </tr>
                        <tr>
                            
                            <td></td>
                            <td></td>
                            <td><strong>iva</strong></td>
                            <td className="text-right"><strong>${parseFloat(subTotal * 0.22).toFixed(2)}</strong></td>
                        </tr>
                        <tr>
                            
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className="text-right"><strong>${parseFloat(subTotal * 1.22).toFixed(2)}</strong></td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Carrito;

