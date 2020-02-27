
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
    if(cart===undefined){
        
        debugger;
        return item;
    }
    console.log(item);
    
    let newCart = cart
    debugger;
    const index =  newCart.findIndex(cart => cart._id === item[0]._id)
    console.log(index);
    
    if(index >= 0){
        console.log(newCart[index]);
        if(newCart[index].count===undefined){
            
            newCart[index].count=item[0].count;
        }
        
        const valor= newCart[index].count+item[0].count;
        
        newCart[index].count = valor;
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