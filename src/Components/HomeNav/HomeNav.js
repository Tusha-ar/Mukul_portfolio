import React from 'react';
import './homeNav.scss'
import { Link } from 'react-router-dom';

const HomeNav=()=>{
    return(
        <div className='HomeNav'>
            <Link className='link' to='/photos'>
                <div className='photos'>
                    <h3>photos</h3>
                </div>
            </Link>
            <Link to='/videos' className='link'>
            <div className='videos'>
                <h3>Videos</h3>
            </div>
            </Link>
            <a href='https://www.instagram.com/mukulreru/' target='_' className='link'>
            <div className='insta'>
                <h3>Instagram</h3>
            </div>
            </a>
            <a href='https://www.youtube.com/channel/UCelbzlW3n8pcvMpDKUwdMsA' target='_' className='link'>
            <div className='youtube'>
                <h3>Youtube</h3>
            </div>
            </a>
        </div>
    )
}

export default HomeNav