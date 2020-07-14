import React from 'react';
import VideoIntro from '../VideoIntro/VideoIntro';
import About from '../AboutHome/About';
import HomeNav from '../HomeNav/HomeNav';
import Footer from '../Footer/footer';
import Sign from '../sign/Sign';



const Home = () =>{
    return(
        <div>
            <VideoIntro/>
      <About/>
      <HomeNav/>
      <Sign/>
      <Footer/>
        </div>
    )
}

export default Home