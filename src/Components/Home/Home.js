import React from 'react';
import VideoIntro from '../VideoIntro/VideoIntro';
import About from '../AboutHome/About';
import HomeNav from '../HomeNav/HomeNav';



const Home = () =>{
    return(
        <div>
            <VideoIntro/>
      <About/>
      <HomeNav/>
        </div>
    )
}

export default Home