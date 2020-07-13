import React from 'react';
import PhotoNav from '../sideNavPhotos/PhotoNav';
import './photos.scss'
import PhotoSections from '../PhotoSections/PhotoSections';

const Photos =()=>{
    return(
        <div 
        className='photos'>
            <PhotoNav/>
            <p>
                I hope you will like it!!
            </p>
            <PhotoSections/>
        </div>
    )
}

export default Photos