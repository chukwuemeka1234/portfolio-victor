import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {FaAngellist} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/vic-chukwuemeka/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/chukwuemeka1234" target="_blank"><BsGithub /></a>
      <a href="https://twitter.com/avc_victor" target="_blank"><BsTwitter /></a>
      <a href="https://angel.co/u/victor-chukwuemeka-1" target="_blank"><FaAngellist /></a>
    </div>
  )
}

export default HeaderSocials