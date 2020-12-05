import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import {CartContext} from '../global/CartContext';

const Navbar = () => {
    const {quantity} = useContext(CartContext);
    return(
        <nav className='navbar'>
            <h1 className="logo">
                <Link to="/">uniolo</Link>
            </h1>
            <ul id='cart'>
                <li className='shopping-cart'>
                    <Link to="cart" className='cart-icon'><i className='bx bxs-cart-alt'></i></Link>
                    <div className='cart-count'>
                        <span>{quantity}</span>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;