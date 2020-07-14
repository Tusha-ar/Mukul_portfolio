import React from 'react';
import './videoPage.scss'
import Team from '../team/Team';
import Sign from '../sign/Sign';
import Footer from '../Footer/footer';


const VideoPage = () =>{

    return(
        <div className='videoPage'>
            <div className='logo'>
                <a href='https://www.youtube.com/channel/UCelbzlW3n8pcvMpDKUwdMsA' target='_'><img src={require('../../Assets/logo.jpg')} alt='logo'/></a>
                <a href='https://www.youtube.com/channel/UCelbzlW3n8pcvMpDKUwdMsA' target='_'><button>Subscribe</button></a>
            </div>
            <div className='youtube_videos'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/T3eyYA2HjCM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='video'></iframe>
            <h3>Down To Earth | Parry Singh ft Anmol Chaudhary |Mukul Reru | New Punjabi Song</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/U2ud8k3xcKE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='video'></iframe>
            <h3>KODA SAACH | POETRY | LIVES MATTER | No Humanity</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5em55IjsXag" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='video'></iframe>
            <h3>B ROLL(POV) idea from PETER LINDGREN | B SHAKE | MukulReru| 1squareshot</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-Mr0ghoATaI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='video'></iframe>
            <h3>Coffee ? | Anmol Chaudhary | Mukul Reru</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4G9j7OUFpxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='video'></iframe>
            <h3>Life Cycle | Mukulreru | Ritviz-Sage</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/I5fCVS70AE8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='video'></iframe>
            <h3>CAPITAL New Delhi | Mukul Reru</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9ZkOEuEIc4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='video'></iframe>
            <h3>Dehradun | mukulreru</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rV7AOHGTfZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='video'></iframe>
            <h3>mukulreru | mayanksingh</h3>
            </div>
            <Team/>
            <Sign/>
      <Footer/>
        </div>
    )
}


export default VideoPage