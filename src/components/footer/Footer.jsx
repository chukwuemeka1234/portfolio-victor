/* eslint-disable */
import React from 'react';
import './footer.css';
import { BsLinkedin,  BsGithub, BsTwitter } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Victor</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/vic-chukwuemeka/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/chukwuemeka1234" target="_blank"><BsGithub /></a>
      <a href="https://twitter.com/avc_victor" target="_blank"><BsTwitter /></a>
      <a href="https://angel.co/u/victor-chukwuemeka-1" target="_blank"><FaAngellist /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Victor Chukwuemeka. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer