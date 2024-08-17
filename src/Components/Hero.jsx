import React from 'react'
import "../Styles/Hero.css";
import bannerrightimg1 from "../assets/bannerrightimg1.svg"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-container">
        <div className="hero-content">
            <h1 className='hero-heading'>
              <p className='heading-para'>Results-Driven Digital Marketing Agency With 18+ Years of Experience</p>
              </h1>
            <p className='hero-para'>We Create Digital Marketing Strategies to Empower Your Next Business Evolution.</p>
            <form method="post" className='hero-form'>
                <div className="form-cont">
                    <input type="url" name='url' placeholder='Enter website url' className='form-input' />
                </div>
                <div className="form-button">
                    <button href='#' className="hero-form-btn">Get a free proposal</button>
                </div>
            </form>
        </div>
        <div className="hero-image">
            <img src={bannerrightimg1} alt="bannerrightimg1" className="hero-img" />
        </div>
      </div>
    </div>
  )
}

export default Hero
