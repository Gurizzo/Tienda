import axios from 'react-axios';
const API_URL= 'http://tiendaonline2020.herokuapp.com/api'

export function signUp (userName,pass) {
const url= `${API_URL}/user/register`;
fetch (url,{
    method:'POST',
    body: JSON.stringify({
        email:userName,
        password: pass
    }),
    headers: {
        'Content-Type' : 'application/json' 
    }
})

};



export function login (userName,pass){

    return true;
}    

export function getProducts (){

    const Products ={};
return Products;
}