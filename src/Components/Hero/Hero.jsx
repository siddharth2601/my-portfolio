import React from 'react'
import './Hero.css'
import pic from '../../assets/pic.png' 
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={pic} alt="" />
        <h1><span>I'm Siddharth,</span> Frontend Developer based in India.</h1>
        <p>I am a Frontend Developer from Mumbai, India with 1+ years of experience.</p>
        <div className="hero-action">
        <div className="hero-connect">Connect with me<AnchorLink className='anchor-link' offset={50} href='#contact'></AnchorLink></div>
        <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero