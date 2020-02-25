
 let cart=[
    
       { 
           "_id":"5e40b0ee97fef18946b150f2",
           "name":"Poción Multijugos",
           "price":111.6,
           "count":0
        },
    
]

export function filterProductsByName(products,name) {

    return products.filter(product =>{
        return product.name.toLowerCase().includes( name.toLowerCase()) }
        );
        
}

export function addToCart (cart,item) {
    let newCart = [...cart]
    const index =  newCart.findindex(product => product._id ===item._id)
    if(index >= 0){
        newCart[index].count += item.count;
    }
    else{
        newCart.push(item)
    }

    return newCart;
}
    


export function countCartItems (cart) {
    let contar=0;
    contar = cart.map((obj) => contar+ obj.count);

return contar;
}

export function countCartTotalAmount (cart) {
    let total=0;
    total= cart.map((obj) => obj.count* obj.price);
return total;
}