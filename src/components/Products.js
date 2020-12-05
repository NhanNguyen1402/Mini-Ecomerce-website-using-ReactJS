import React, { useContext } from 'react';
import {CartContext} from '../global/CartContext';
import applewatch from '../images/applewatch.png';
import jacket from '../images/jacket.png';
import menshoe from '../images/menshoes.png';
import pnjsilver from '../images/pnjsilver.png';
import sunglassesprada from '../images/sunglassesprada.png';
import watch from '../images/watch.png';
import womenbag from '../images/womenbag.png';
import womenshoes from '../images/womenshoes.png';

const Products = (props) => {
    const {dispatch} = useContext(CartContext);
    const productsList =[
        {id: 1, name: 'Apple Watch', price: 670, image: applewatch, status: 'hot'},
        {id: 2, name: 'Men Jacket', price: 1250, image: jacket, status: 'new'},
        {id: 3, name: 'Gucci Shoe', price: 2390, image: menshoe, status: 'hot'},
        {id: 4, name: 'PNJ Silver', price: 310, image: pnjsilver, status: 'new'},
        {id: 5, name: 'Prada Eyewear', price: 790, image: sunglassesprada, status: 'hot'},
        {id: 6, name: 'Rolex', price: 690, image: watch, status: 'hot'},
        {id: 7, name: 'Women Bag', price: 220, image: womenbag, status: 'new'},
        {id: 8, name: 'Women Shoe', price: 470, image: womenshoes, status: 'new'}
    ];
    const products = productsList.map((item) => 
        <div className = 'product-detail' key = {item.id}>
            <div>
                   {item.status ==='hot' ? <div className ='hot'>HOT</div> : ''}
                   {item.status ==='new' ? <div className ='new'>NEW</div> : ''}
            </div>
            <img className = 'product-image' src = {item.image} alt = 'not found'/>
            <div className = 'product-name'>{item.name}</div>
            <div className = 'product-price'>${item.price}</div>
            <div className='product-button button' onClick = {() => dispatch({type: 'ADD_TO_CART',
                            id: item.id, item})}>
                add to cart
            </div>
        </div>
    );
    return (
        
       <div className ='container bd-grid' id ='featured'>
           <h1>featured</h1>
            <div className = 'products'>{products}</div>
        </div>    
    )   
}

// const addToCart = () = {}


export default Products;