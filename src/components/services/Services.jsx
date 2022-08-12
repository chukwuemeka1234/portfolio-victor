/* eslint-disable */
import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Information Architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visual Communication</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaboration</p>
            </li>
          </ul>
        </article>
        {/*End of UI/UX*/}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML/CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React/Redux</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Analytical</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Testing and debugging</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Search engine optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Back-end functionalities</p>
            </li>
          </ul>
        </article>
        {/*End of Web development*/}

        <article className='service'>
          <div className="service__head">
            <h3>Professional Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adaptability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Work Ethic</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Teamwork</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mentoring</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Critical Thinking</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Problem Solving</p>
            </li>
          </ul>
        </article>
        {/*End of Content creation*/}
      </div>
    </section>
  )
}

export default Services