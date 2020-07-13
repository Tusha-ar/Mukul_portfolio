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
                <h2>Hey Everone!</h2><br/>
                I started Photography as a hobby but now it became a passion for me. I love clicking random photos out there in the streets.<br/>
                I use sony Alpha bla bla bla as my primary camera.<br/>
                Here is a sample of my work.<br/>
                <h3>I hope you will like it!!</h3>
            </p>
            <PhotoSections/>
        </div>
    )
}

export default Photos