 
import React, {Component} from 'react';
//import './App.css';
import Login from './Component/Login/Login.js';
import Registro from './Component/Registro/Registro.js';
import ProductList from './Component/productos/index.js';
import {BrowserRouter, Route,Switch} from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {} 
  };
  



  render() {
    return (

     /*  <ProductList></ProductList> */
      
      <BrowserRouter>
        <Switch>
             <Route exact path="/" component={Login}/>
             <Route exact path="/ProductList" component={ProductList}/>
             <Route exact path="/Registro" component={Registro}/>
        </Switch>
    </BrowserRouter>
   
     
    );
  }
}
