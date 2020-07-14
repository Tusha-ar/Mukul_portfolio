import React from 'react';
import './about.scss'

const About = () =>{
    return(
        <div className='about'>
            <img src={require('../../Assets/mukul.png')} alt='mukul'/>
            <div className='aboutText'>
            Hi, Mukul here.<br/><br/>
Right now am pursuing my BE in computer science from Chitkara University,Punjab. <br/>

 <p>So about my photography I started clicking photos as a hobby but now am seeking this as my full time Career.I do street, travel, portraits and wedding shots. </p>

As a cinematographer I am still exploring myself but am quite good at editing. 

<br/><br/>I live in Punjab India and would love to connect with you to discuss how we can create what you need together.
            </div>
        </div>
    )
}

export default About