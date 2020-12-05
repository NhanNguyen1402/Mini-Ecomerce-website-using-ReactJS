
export const CartReducer = (state, action) => {
    const {shoppingCart, totalPrice, quantity} = state;
    let item;
    let index;
    let updatePrice;
    let updateQuantity;
    switch(action.type){
        // ========== add product to shopping cart ============
        case 'ADD_TO_CART' :
            const check = shoppingCart.find(item => item.id === action.id);
            if(check){
                return state;
            } else {
                item = action.item;
                item['quantity'] = 1;
                updateQuantity = quantity + 1;
                updatePrice = totalPrice + item.price;
                return{ shoppingCart: [item, ...shoppingCart], totalPrice:
                    updatePrice, quantity: updateQuantity}
            }
            break;
            // ========== plus quantity ==========
        case 'PLUS' :
            item = action.cart;
            item.quantity = item.quantity + 1;
            updatePrice = totalPrice + item.price;
            updateQuantity = quantity + 1;
            index = shoppingCart.findIndex(item => item.id === action.id);
            shoppingCart[index] = item;
            return{ shoppingCart: [...shoppingCart], totalPrice: updatePrice, quantity: updateQuantity};
            break;
            // ========== minus quantity ========
        case 'MINUS' :
            item = action.cart;
            if(item.quantity < 1){
                return state;
            }else{
                item.quantity = item.quantity - 1;
                updatePrice = totalPrice - item.price;
                updateQuantity = quantity - 1;
                index = shoppingCart.findIndex(item => item.id === action.id);
                shoppingCart[index] = item;
                return{ shoppingCart: [...shoppingCart], totalPrice: updatePrice, quantity: updateQuantity};
            }
            break;
            //========== remove product from shopping cart ============ 
        case 'REMOVE':
            const remove = shoppingCart.filter(item => item.id !== action.id)
                item = action.cart;
                updateQuantity = quantity - item.quantity;
                updatePrice = totalPrice - item.quantity * item.price;
                return {shoppingCart: [...remove], quantity: updateQuantity, totalPrice: updatePrice};
                break;
            
       default: return state;      
    }
}