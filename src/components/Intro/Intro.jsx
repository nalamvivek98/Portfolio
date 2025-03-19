import React from 'react';
import './intro.css';
import me from '../../img/me3.png';
import { FiDownload } from 'react-icons/fi';

function Intro() {
  return (
    <div className='i' id='intro'>
      <div className='links'>
        <a href='/Portfolio/Resume.pdf' download='Resume.pdf' target='_blank' rel='noopener noreferrer' className='resume-button'>
          <FiDownload size={30} className='download-icon' />
        </a>
        <span className='i-desc'> Resume </span>
      </div>
      
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hi, This is</h2>
          <h1 className='i-name'>Leela Naga Vivek Nalam</h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Web Developer</div>
              <div className='i-title-item'>Gamer</div>
              <div className='i-title-item'>Traveller</div>
              <div className='i-title-item'>Content Creator</div>
            </div>
          </div>
          <p className='i-desc'>
           <i> I enjoy designing and developing applications across various technologies. I love traveling the world, meeting new people, and exploring different cultures. Cooking is a passion of mine, and I cherish spending quality time with friends and family.
           </i></p>
        </div>
      </div>
      
      <div className='i-right'>
        <div className='i-bg'></div>
        <div className='i-profile-container'>
          <img src={me} alt='Profile' className='i-img' />
        </div>
      </div>
    </div>
  );
}

export default Intro;
