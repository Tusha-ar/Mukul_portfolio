import React from 'react';
import './team.scss'

const Team = () =>{
    return(
        <div className='team'>
            <h2>Video Team</h2>
            <div>
            <div>
                <img src={require('../../Assets/Team/anmol chaudhary.png')} alt='img'/>
                <span>Anmol Chaudhary</span>
                <span>Lyricist</span>
            </div>
            <div>
                <img src={require('../../Assets/Team/mukulreru_editor.png')} alt='img'/>
                <span>Mukul Reru</span>
                <span>Video Director & Editor</span>
            </div>
            <div>
                <img src={require('../../Assets/Team/parry singh.png')} alt='img'/>
                <span>Parry Singh</span>
                <span>Music Composer</span>
            </div>
            <div>
                <img src={require('../../Assets/Team/tushar.jpg')} alt='img'/>
                <span>Tushar</span>
                <span>Web Manager</span>
            </div>
            </div>
        </div>
    )
}


export default Team