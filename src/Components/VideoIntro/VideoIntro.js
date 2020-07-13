import React from 'react';
import './VideoIntro.scss'

const VideoIntro=()=>{
    return(
        <div className='videoIntro'>
            <video src={require('../../Assets/intro.mp4')} autoPlay={true} height='80%' width='80%' controls/>
        </div>
    )
}

export default VideoIntro