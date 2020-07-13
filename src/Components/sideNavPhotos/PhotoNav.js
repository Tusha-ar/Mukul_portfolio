import React from 'react';
import './photoNav.scss'


const PhotoNav=()=>{
    return(
        <div className='photoNav'>
            <div className='left'>
                <a href='#people'><span>People</span></a>
                <span>Marrige</span>
            </div>
            <div className='right'>
                <a href='#street'><span>Street</span></a>
                <a href='#travel'><span>Travel</span></a>
            </div>
        </div>
    )
}

export default PhotoNav