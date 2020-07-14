import React from 'react';
import './nav.scss';
import { Link } from 'react-router-dom';

const Nav = ()=>{
    return(
        <div className='nav'>
            <div className='nav_part'>
                <span>
                    <Link to='/' className='link'>
                    Home
                    </Link>
                </span>
                <span>
                    <Link to='/photos' className='link'>
                    Photos
                    </Link>
                </span>
            </div>
            <div className='nav_part'>
                <span>
                    <Link to='/videos' className='link'>
                    Videos
                    </Link>
                </span>
                <span>
                    <Link to='/contact' className='link'>
                    Contact
                    </Link>
                </span>
            </div>
        </div>
    )
}
export default Nav