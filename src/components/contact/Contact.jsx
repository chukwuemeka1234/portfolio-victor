/* eslint-disable */
import React from 'react';
import './contact.css';
import { BiEnvelope } from 'react-icons/bi';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hn57xv2', 'template_yyqkhzf', form.current, 'fqGaYg0QIYkeoXUQN')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <BiEnvelope className="contact__option-icon" />
            <h4>Email</h4>
            <h5>anivictor.chukwuemeka.avc@gmail.com</h5>
            <a href="mailto:anivictor.chukwuemeka.avc@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>anivictor</h5>
            <a href="https://m.me/ani.victor.chukwuemeka" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2347065127989</h5>
            <a href="https://api.whatsapp.com/send?phone+2347065127989" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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