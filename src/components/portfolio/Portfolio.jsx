import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Oracle-portfolio.png';
import IMG2 from '../../assets/Budget-portfolio.png';
import IMG3 from '../../assets/FootballStat-portfolio.png';
import IMG4 from '../../assets/liongaze-portfolio.png';
import IMG5 from '../../assets/Bookstore-portfolio.png';
import IMG6 from '../../assets/SpaceHub-portfolio.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Oracle app" />
          </div>
          <h3>Oracle Booking app</h3>
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://github.com" className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
        <article>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Budget app" />
          </div>
          <h3>Budget app</h3>
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://github.com" className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
        <article>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Football stat" />
          </div>
          <h3>Football stat app for Ligue 1</h3>
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://github.com" className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
        <article>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Liongaze movies" />
          </div>
          <h3>Liongaze</h3>
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://github.com" className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
        <article>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Bookstore" />
          </div>
          <h3>Bookstore app</h3>
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://github.com" className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
        <article>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Space Travellers" />
          </div>
          <h3>Space Travellers Hub</h3>
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://github.com" className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio