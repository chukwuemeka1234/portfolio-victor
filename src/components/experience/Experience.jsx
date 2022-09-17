/* eslint-disable */
import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import {ImHtmlFive} from 'react-icons/im';
import {SiJavascript, SiTailwindcss, SiRedux, SiRuby, SiRubyonrails, SiPostgresql} from 'react-icons/si';
import {IoLogoCss3} from 'react-icons/io';
import {FaReact} from 'react-icons/fa';


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <ImHtmlFive className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiRedux className='experience__details-icon'/>
              <div>
                <h4>Redux</h4>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiRuby className='experience__details-icon'/>
              <div>
                <h4>Ruby</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiRubyonrails className='experience__details-icon'/>
              <div>
                <h4>Ruby on Rails</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon'/>
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience