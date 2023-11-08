/* eslint-disable */
import React from 'react'
import CV from '../../assets/Resume-Recent.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>Get my resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA