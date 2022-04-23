import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {FaTelegram} from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">

    <div>
      <a href='https://www.linkedin.com/in/atefeh-masoumi-b80a821ab/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
    </div>
    <div>
      <a href='https://github.com/Atefeh-Masoumi' target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
    <div>
     <a href='https://telegram.me/Atefeh652'><FaTelegram /></a> 
    </div>
    
  </div>
);

export default SocialMedia;
