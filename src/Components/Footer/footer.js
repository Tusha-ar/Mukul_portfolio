import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <div className='footer'>
            <Link to='/contact' className='link'>
                Conatct Us
            </Link>
            <span>Website made by <a href='https://www.instagram.com/tusha_aar/'>Tushar</a></span>
        </div>
    )
}

export default Footer