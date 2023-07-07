import React from 'react';
import hero from '../images/Group 77.png'

export const Hero = () => {
  return (
    <section className='hero'>
        <img src={hero} className='hero-img'></img>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities 
            led by one-of-a-kind hosts—all without 
            leaving home.
        </p>
    </section>
  )
}
