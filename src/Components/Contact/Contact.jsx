import React from 'react'
import './Contact.css'
import envelope from '../../assets/envelope.png'
import telephone from '../../assets/telephone.png'
import arrows from '../../assets/arrows.png'
import { useState } from 'react';

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "104ec125-9037-4f72-93fa-079d5942444f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

   const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
       alert("✅ Your message has been sent successfully!");
      event.target.reset();
    } else {
      setResult("Error");
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={envelope} alt="" /> <p>siddharth.visuals@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={telephone} alt="" /> <p>+000-000-000</p>
                </div>
                <div className="contact-detail">
                    <img src={arrows} alt="" /> <p>Mumbai, India</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
            {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact