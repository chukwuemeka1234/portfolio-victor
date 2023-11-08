/* eslint-disable */
import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/affax.jpeg';
import AVTR2 from '../../assets/aladdin.jpeg';
import AVTR3 from '../../assets/ornela.jpeg';
import AVTR4 from '../../assets/ricky.jpeg';

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
    name: 'Affaxed Kiprotich',
    review: 'Victor Chukwuemeka is a talented person and really professional. We have worked together in several projects while studying at Microverse and I have gotten to know his work ethics. He is prompt in tackling projects and he can communicate well since most of our meetings involved remote pair programming. He is also well equipped technically in software development, majorly in web development and he is suitable for every remote and non remote job out there.'
    
  },
  {
    image: AVTR2,
    name: 'Aladdin Alsalem',
    review: 'I recommend Victor, He is a very active, and a team player, He has experience with front-end development, especially in Reactjs.'
  },
  {
    image: AVTR3,
    name: 'Azonkeu Ornela',
    review: 'Victor is a great team player and a talented software developer. I worked with him on several projects and I was impressed with his technical knowledge and his communication skills. Always punctual for meetings and always ready to help. I recommend Victor to any company looking for extremely talented software developers.'
  },
  {
    image: AVTR4,
    name: 'Ricky Mormor',
    review: 'Victor is a fantastic software engineer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled on a software development program, and in that time his work ethic blew me away.'
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