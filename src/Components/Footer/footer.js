import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <div className='footer'>
            <Link to='/contact' className='link'>
                Contact
            </Link>
        </div>
    )
}

export default Footer