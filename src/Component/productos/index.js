import React,{Component} from 'react';
import {getProducts,API_URL, login} from '../Service/Services';
import Producto from '../Producto';



class ProductList extends Component{

    constructor(props){
        super(props);
        
        this.state={
            datos:[]
        }
    }

    componentDidMount() {
        this.handleUpdateClick();
     }

     handleUpdateClick=() =>{
        
        getProducts().then(data =>{
           
            
            console.log(data)
            this.setState({
                
                datos:data
            })
          

        })
        

    }

    render(){
        
        console.log(this.state.datos);
        const listItems = this.state.datos.map((dato) => <Producto key={dato._id} data={dato}> </Producto>  );
        
        return (
           
        <div>
            hola
            {listItems}
            </div>
            )
         
    }


    
}


export default ProductList;
