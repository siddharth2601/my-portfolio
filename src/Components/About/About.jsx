import React from 'react'
import './About.css'
import desk from '../../assets/desk.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={desk} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hey there! I’m a curious learner who loves to design, code, and create things that make a difference.</p>
                <p>From crafting responsive web pages to exploring AI-powered projects, I enjoy working on ideas that combine logic with creativity.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>4+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>1x</h1>
            <p>HACKATHON WINNER</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Build</h1>
            <p>YOUTUBE CHANNEL 'UISTACKDEV'</p>
        </div>
      </div>
    </div>
  )
}

export default About