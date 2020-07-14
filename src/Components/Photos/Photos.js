import React from 'react';
import PhotoNav from '../sideNavPhotos/PhotoNav';
import './photos.scss'
import PhotoSections from '../PhotoSections/PhotoSections';
import Sign from '../sign/Sign';
import Footer from '../Footer/footer';

const Photos =()=>{
    return(
        <div className='photos' id='photos'>
            <PhotoNav/>
            <p>
                I hope you like these clicks.
            </p>
            <PhotoSections/>
            <Sign/>
      <Footer/>
        </div>
    )
}

export default Photos