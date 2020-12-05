import React, {useContext} from 'react';
import {CartContext} from '../global/CartContext';
import StripeCheckout from 'react-stripe-checkout';


const Cart = () => {
    const {shoppingCart, totalPrice, dispatch} = useContext(CartContext);
    const token = (token) => {};
    return (
        <div className = 'container'>
            <div className = 'cart-info'>
                {shoppingCart.length > 0 ? shoppingCart.map(cart => (
                    <div className = 'cart' key = {cart.id}>
                        <div className = 'cart-img'>
                            <img src = {cart.image} alt = 'not found'/>
                        </div>
                        <div className = 'cart-detail'>
                            <div className = 'cart-name'>{cart.name}</div>
                            <div className = 'cart-price'>$ {cart.price}</div>
                            <div className = 'product-qty'>
                                <div className = 'cart-qty-plus' onClick = {()=> dispatch({type:'PLUS', id:cart.id, cart})}>
                                    <i className='bx bx-plus-circle'></i>
                                </div>
                                <div className = 'cart-quantity'>{cart.quantity}</div>
                                <div className = 'cart-qty-minus' onClick = {()=> dispatch({type:'MINUS', id:cart.id, cart})}>
                                    <i className='bx bx-minus-circle'></i>
                                </div>
                            </div>                        
                            <div className = 'cart-totalprice'>$ {cart.quantity * cart.price}</div>
                            <div className = 'cart-item-remove' onClick = {()=> dispatch({type:'REMOVE', id:cart.id, cart})}>
                                <i className='bx bx-trash'></i>
                            </div>
                        </div>
                    </div>
                )) 
                : <div className = 'warning'>Your cart is empty !</div>}
            </div>
            <div className = 'summary'>
                <h2>Total Price:</h2>
                <div className = 'total-bill'>$ {totalPrice}.00</div>
            </div>
            <div className = 'payment'>
                <StripeCheckout
                stripeKey='pk_test_51Hv5giGXxLqOQfeVmk6EKMKzUd09NVLU0tHJidHo1aEO2qYCbrK7k9nB2jgn3Bt3bZmDkQL7C6axElNNcQmxJjtf00JXw6Z8Ap'
                token = {token}
                billingAddress
                shippingAddress
                amount= {totalPrice}
                name= 'Payment'
                >                    
                </StripeCheckout>
            </div>
           
        </div>
    )
}

export default Cart;