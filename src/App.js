 
import React, {Component} from 'react';
//import './App.css';
import Login from './Component/Login/Login.js';
//import Registro from './Registro/Registro.js';
import ProductList from './Component/productos/index.js';
import {BrowserRouter, Route,Switch} from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {} 
  };
  



  render() {
    return (
      
      <BrowserRouter>
        <Switch>
             <Route exact path="/Login" component={Login}/>
             <Route exact path="/ProductList" component={ProductList}/>
        </Switch>
    </BrowserRouter>
   
     
    );
  }
}
