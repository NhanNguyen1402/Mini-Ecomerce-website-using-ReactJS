import React, {createContext, useReducer} from 'react';
import {CartReducer} from './CartReduce';

export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [], totalPrice: 0, quantity: 0})

    return(
        <CartContext.Provider value = {{...cart, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;