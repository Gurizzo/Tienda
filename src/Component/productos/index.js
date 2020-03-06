import React,{Component} from 'react';
import {getProducts} from '../Service/Services';
import {filterProductsByName,addToCart, DeleteItem} from '../../Util/Util';
import Producto from './Producto';
import {Button,InputGroup,FormControl} from 'react-bootstrap';
import {Spinner} from 'react-bootstrap';
import Carrito from './Carrito';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login/Login';




class ProductList extends Component{

    constructor(props){
        super(props);
        
        this.state={
            products:[], //Lista de productos.
            search:"",   //Valores del filtro de busqueda.
            cart:[],
            status:props.status
        }
    }
    
    handleChange=(event,search)=>{ 
        
        this.setState({
          [search]:event.target.value
        })
        
      }

      ShopClick = (product,count) => {
          
        if(!isNaN(count) && count>0){
            
            let cart = addToCart(this.state.cart, {...product, count});
            this.setState({
                cart:cart
            })
          }
        
        
        
        
      }
      DeleteItemClick =(product) =>{
         
          let cart = DeleteItem(this.state.cart,product);
          this.setState({
              cart:cart
          })
      }
    

    componentDidMount() {
        this.handleUpdateClick();
     }

     logOut=() =>{
        this.setState({
            status:undefined
        })
        this.handleUpdateClick()
     }

     handleUpdateClick=() =>{ //Busqueda de los datos usando la funcion getProducts.
        
        getProducts().then(data =>{
           
            
            
            this.setState({
                
                products:data
            })
          

        })
        
        
    }


    render(){
        
        
        if(this.state.status!==undefined || this.state.status===true){
            
            
            let listItems=[]; //Lista de productos a imprimir de <Producto>
    
            if(this.state.products.length<0 || this.state.search===""){
    
                 listItems = this.state.products.map((product) => <Producto key={product._id} data={product} onShopClick={this.ShopClick} > </Producto>  );
                //Valida que no llegue undefined al filtro
                
            }else{
    
                const filtred= filterProductsByName(this.state.products,this.state.search);
                 listItems = filtred.map((product) => <Producto key={product._id} data={product} onShopClick={this.ShopClick}  > </Producto>  );
                //Realiza el filtrado y valida undefined
    
            }
    
            
            if(this.state.products.length<=0){
                
                return <div className="d-flex justify-content-center"><Spinner  animation="grow" variant="primary" /></div>
                //Si todavia no llego la carga de datos muestra un spinner.
    
            }else{
                
                //Carga de la vista si tiene datos, y los filtra si es necesario.
                return (
                    
                    <div className="md-form mt-0">
                        
                    
                    <InputGroup className="mb-3">    
        <FormControl  aria-describedby="basic-addon1"  type="text" placeholder="Buscar..." aria-label="Search" value={this.state.search} name="search" required onChange={(event)=>{this.handleChange(event,'search')}} />
        <InputGroup.Prepend>
          <Button variant="outline-secondary"onClick={() => this.logOut()} >Salir</Button>
        </InputGroup.Prepend  >
      </InputGroup>
                    <div className="container-fluid">
                    <div className="row">
    
                    <div className="col" >
                        {listItems}
                        </div>
                        
                        <div className="col" >
                        <Carrito  carrito={this.state.cart} onDeleteItemClick={this.DeleteItemClick}></Carrito>
                        </div>
                        
                    </div>
                    
                        </div>
    
                    </div>
    
    
                    
                        
                        )
            }
            
    
             
        }else{
            return <Login></Login>
        }
        
        }
        
        


    
}


export default ProductList;
