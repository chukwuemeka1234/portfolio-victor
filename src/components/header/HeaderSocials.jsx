import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div>
      <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com" target="_blank"><BsGithub /></a>
      <a href="https://twitter.com" target="_blank"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials