

export function filterProductsByName(products,name) {

    return products.filter(product =>{
        return product.name.toLowerCase().includes( name.toLowerCase()) }
        );
        
}

export function addToCart (cart,item) {
   
    let newCart = [...cart]
    const index =  newCart.findIndex(cart => cart._id === item._id)
 
    if(index >= 0){
        newCart[index].count += item.count
    }
    else{
        newCart.push(item)
    }

    return newCart;
}

export function DeleteItem(cart,item){
    
    return cart.filter(c => c._id  !== item._id)
}

    


export function countCartItems (cart) {
    let contar=0;
    cart.map((obj) => contar+= obj.count);

return contar;
}

export function countCartTotalAmount (cart) {
    let total=0;
    cart.map((obj) => total +=obj.count* obj.price);
return total;
}