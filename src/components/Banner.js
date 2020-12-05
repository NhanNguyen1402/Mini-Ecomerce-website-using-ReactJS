import React from 'react';
import model from '../images/model.png';
import {Link} from 'react-router-dom';

const Banner = () => {
    return(
            <div className='banner-container bd-grid'>
                <img src = {model} alt='model' />
                <div className='banner-title'>
                    <h1>Featured <span>Collection</span></h1>
                    <div className='button'>
                        <Link to ="/">Shopping Now</Link>
                    </div>
                </div>
            </div>           
    )
}

export default Banner;