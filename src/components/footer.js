import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className = 'footer'>
                <h1>UNIOLO</h1>
                <ul className ='contact'>
                    <li>ADD: <span>123 Lingdgar St</span></li>
                    <li>PHONE: <span>987-678-54</span></li>
                </ul>
                <ul className= "social-network">
                    <a href="#home" className="footer-social"><i className='bx bxl-facebook'></i></a>
                    <a href="#home" className="footer-social"><i className='bx bxl-twitter' ></i></a>
                    <a href="#home" className="footer-social"><i className='bx bxl-instagram-alt' ></i></a>
                </ul>
            </div>
            <div className = 'copy'>&#169; Coppyright all right reserved</div>
        </div>
        

        
    );
}

export default Footer;