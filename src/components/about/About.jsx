/* eslint-disable */
import React from 'react';
import './about.css';
import ME from '../../assets/my-pics.jpeg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worlwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ completed projects</small>
            </article>
          </div>

          <p>
          Hello, my name is Victor Chukwuemeka. I am a full-stack web developer and I have specialized in React, and Ruby on rails to build modern websites.
          I have built various projects and I have a great experience working remotely.
          Before I became a web developer, I was a computer science student at the University of Nigeria where I learned basic programming and got to interact with a diverse community of students, and also learned a good working ethic. I have also worked in a church as a Music Director where I learned to work with and organize a team. I am confident, dedicated, hardworking and I never give up to achieve a goal.
          <p>I would like to be part of your community and help solve technical problems.
          Thank you for your time. I look forward to meeting you in person so we can further this conversation.</p>
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About