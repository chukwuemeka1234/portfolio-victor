/* eslint-disable */
import React from 'react';
import './contact.css';
import { BiEnvelope } from 'react-icons/bi';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <BiEnvelope />
            <h4>Email</h4>
            <h5>anivictor.chukwuemeka.avc@gmail.com</h5>
            <a href="mailto:anivictor.chukwuemeka.avc@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>anivictor</h5>
            <a href="https://m.me/ani.victor.chukwuemeka" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+2347065127989</h5>
            <a href="https://api.whatsapp.com/send?phone+2347065127989" target="_blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact