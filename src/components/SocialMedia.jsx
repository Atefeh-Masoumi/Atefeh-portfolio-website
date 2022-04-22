import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      
      <a href='https://www.linkedin.com/in/atefeh-masoumi-b80a821ab/'><BsLinkedin /></a>
    </div>
  </div>
);

export default SocialMedia;
