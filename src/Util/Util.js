
 let cart=[
    
       { 
           "_id":"5e40b0ee97fef18946b150f2",
           "name":"Poción Multijugos",
           "price":111.6,
           "count":0
        }
    
]

export function filterProductsByName(products,name) {

    return products.filter(product =>{
        return products.name.ToLowerCase().includes( name.ToLowerCase()) }
        );
}

export function addToCart (cart,item) {

    return cart.filter(cart =>{
        if(cart._id===item._id cart.push(item)){

        }
    })
    
return true;
}

export function countCartItems (cart) {

return cart.length();
}

export function countCartTotalAmount (cart) {
    const total=0;
    total= cart.map((obj) => obj.count* obj.price);
return total;
}