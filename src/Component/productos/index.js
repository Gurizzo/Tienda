import React,{Component} from 'react';
import {getProducts,API_URL, login} from '../Service/Services';
import Producto from '../Producto';
import {Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




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
        
        
        const listItems = this.state.datos.map((dato) => <Producto key={dato._id} data={dato}> </Producto>  );
        
        if(this.state.datos.length<=0){
            console.log("entre")
            return <div className="d-flex justify-content-center"><Spinner  animation="grow" variant="primary" /></div>
        }else{
            return (
           
                <div>
                    
                    {listItems}
                    </div>
                    )
        }

         
    }


    
}


export default ProductList;
