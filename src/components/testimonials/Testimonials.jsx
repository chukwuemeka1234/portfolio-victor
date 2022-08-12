/* eslint-disable */
import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/autoplay';

const data = [
  {
    image: AVTR1,
    name: 'Grace Nonyelum',
    review: 'Always available to answer any questions. Very knowledgeable about the services he provide. Would recommend to anyone!'
  },
  {
    image: AVTR2,
    name: 'Abdollah Gabriel',
    review: 'Great results. Enjoyable to work with, and most importantly, enabled us to have the presence on the web we needed to conduct business in today market.'
  },
  {
    image: AVTR3,
    name: 'Ricky James',
    review: 'It is always a pleasure to work with Victor and his team. They are personable, responsive, and results-oriented!'
  },
  {
    image: AVTR4,
    name: 'Hadija Azzezat',
    review: 'Victor is attentive, personable, and professional. Victor and his team provide great support for my company`s needs.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }}>
        {
          data.map(({image, name, review, index}) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={image} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials