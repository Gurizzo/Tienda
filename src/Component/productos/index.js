import React,{Component} from 'react';
import {getProducts} from '../Service/Services';
import {filterProductsByName,addToCart, countCartItems} from '../../Util/Util';
import Producto from './Producto';
import {Spinner} from 'react-bootstrap';
import Carrito from './Carrito';
import 'bootstrap/dist/css/bootstrap.min.css';




class ProductList extends Component{

    constructor(props){
        super(props);
        
        this.state={
            products:[], //Lista de productos.
            search:"",   //Valores del filtro de busqueda.
            cart:[]
        }
    }
    handleChange=(event,search)=>{ 
        
        this.setState({
          [search]:event.target.value
        })
        
      }

      ShopClick = (product,count) => {
        console.log(product);
        let cart = addToCart(this.state.cart, {...product, count});
        this.setState({
            cart:cart
        })
        
        
        
      }

    componentDidMount() {
        this.handleUpdateClick();
     }

     handleUpdateClick=() =>{ //Busqueda de los datos usando la funcion getProducts.
        
        getProducts().then(data =>{
           
            
            
            this.setState({
                
                products:data
            })
          

        })
        
        
    }


    render(){
        
        
        let count=0;
        let listItems=[]; //Lista de productos a imprimir de <Producto>

        if(this.state.products.length<0 || this.state.search===""){

             listItems = this.state.products.map((product) => <Producto key={product._id} data={product} onShopClick={()=> this.ShopClick(product,3)}> </Producto>  );
            //Valida que no llegue undefined al filtro
            
        }else{

            const filtred= filterProductsByName(this.state.products,this.state.search);
             listItems = filtred.map((product) => <Producto key={product._id} data={product} onShopClick={()=> this.ShopClick(product,1)}  > </Producto>  );
            //Realiza el filtrado y valida undefined

        }

        
        if(this.state.products.length<=0){
            
            return <div className="d-flex justify-content-center"><Spinner  animation="grow" variant="primary" /></div>
            //Si todavia no llego la carga de datos muestra un spinner.

        }else{
            
            //Carga de la vista si tiene datos, y los filtra si es necesario.
            return (
                
                <div className="md-form mt-0">
                    
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" value={this.state.search} name="search" required onChange={(event)=>{this.handleChange(event,'search')}}></input>
              
                
                    <div className="productos">
                    {listItems}
                    </div>
                    

                    <Carrito  carrito={this.state.cart}></Carrito>
                    </div>
                
                    
                    )
        }

         
    }


    
}


export default ProductList;
