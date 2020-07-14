import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <div className='footer'>
            <Link to='/contact' className='link'>
                Conatct
            </Link>
        </div>
    )
}

export default Footer