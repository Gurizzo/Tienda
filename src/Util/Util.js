
 const cart=[
    
       { 
           "_id":"5e40b0ee97fef18946b150f2",
           "name":"Poción Multijugos",
           "description":"Brebaje anti-resfrío y anti-gripal, ideado, elaborado y producido por Rigoberta Menchú.",
           "price":111.6,
           "photo":"http://tiendaonline2020.herokuapp.com/img/pocion_de_rigoberta.jpg",
           "Count":0
        },
    
]

export function filterProductsByName(products,name) {

    return products.filter(product =>{
        return products.name.ToLowerCase().includes( name.ToLowerCase()) }
        );
}

export function addToCart (cart,item) {

    return cart.filter(cart =>{
        if(cart._id===item._id cart.push(item):)
    })
    
return true;
}

export function countCartItems (cart) {

return cart.length();
}

export function countCartTotalAmount (cart) {
    const total=0;

return total;
}