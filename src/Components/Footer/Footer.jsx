import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import account from '../../assets/account.png'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I am a Frontend  Developer from Mumbai, India with 1+ years of experience.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={account} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe"><p>Subscribe</p></div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 Siddharth. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer