import React from 'react';
import './homeNav.scss'

const HomeNav=()=>{
    return(
        <div className='HomeNav'>
            <div className='photos'>
                <h3>photos</h3>
            </div>
            <div className='videos'>
                <h3>Videos</h3>
            </div>
            <div className='insta'>
                <h3>Instsgram</h3>
            </div>
            <div className='youtube'>
                <h3>Youtube</h3>
            </div>
        </div>
    )
}

export default HomeNav