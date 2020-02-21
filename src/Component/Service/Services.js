import axios from 'react-axios'
export const API_URL= 'http://tiendaonline2020.herokuapp.com/api'

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



export const login = async (userName,pass)=>{

    const url= `${API_URL}/user/login`;
    const promise = fetch (url,{
        method:'POST',
        body: JSON.stringify({
            email:userName,
            password: pass
        }),
        headers: {
            'Content-Type' : 'application/json' 
        }
    })
    return await promise;
    
};
    





export function getProducts (){
    let respuesta=[];
    const url=`${API_URL}/product/all`;
        
    return fetch(url).then(resolve => {
        return resolve.json();
    })
}



/*


export function getProducts (){
return axios.get(`${API_URL}/product/all`)
}*/