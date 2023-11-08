/* eslint-disable */
import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/offlodge1.PNG';
import IMG2 from '../../assets/Afia.PNG';
import IMG3 from '../../assets/summerizer.PNG';
import IMG4 from '../../assets/Oracle-portfolio.png';
import IMG5 from '../../assets/Budget-portfolio.png';
import IMG6 from '../../assets/FootballStat-portfolio.png';
import IMG7 from '../../assets/liongaze-portfolio.png';
import IMG8 from '../../assets/Bookstore-portfolio.png';
import IMG9 from '../../assets/SpaceHub-portfolio.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Offlodge',
    github: 'https://github.com/chukwuemeka1234/offlodge',
    demo: 'https://offlodge.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'E-commerce app',
    github: 'https://github.com/chukwuemeka1234/e-commerce_sanity_stripe',
    demo: 'https://e-commerce-sanity-stripe-57ic.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Article Summerizer',
    github: 'https://github.com/chukwuemeka1234/ai_summerizer',
    demo: 'https://ai-summarizer-vic.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Oracle Booking app',
    github: 'https://github.com/chukwuemeka1234/oracle-booking',
    demo: 'https://protected-ocean-24892.herokuapp.com/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Budget app',
    github: 'https://github.com/chukwuemeka1234/Budget-app',
    demo: 'https://salty-retreat-04794.herokuapp.com/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Football stat app for Ligue 1',
    github: 'https://github.com/chukwuemeka1234/football-stats',
    demo: 'https://sharp-ardinghelli-96e3e2.netlify.app/',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Liongaze',
    github: 'https://github.com/chukwuemeka1234/liongaze',
    demo: 'https://elated-saha-e87646.netlify.app/',
  },
  {
    id: 8,
    image: IMG8,
    title: 'Bookstore app',
    github: 'https://github.com/chukwuemeka1234/bookstore',
    demo: 'https://hardcore-jones-397d6a.netlify.app/',
  },
  {
    id: 9,
    image: IMG9,
    title: 'Space Travellers Hub',
    github: 'https://github.com/chukwuemeka1234/Space-Hub',
    demo: 'https://stoic-brahmagupta-d3bba7.netlify.app/',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-CTA'>
                  <a href={github} className='btn' target={'_blank'}>Github</a>
                  <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
