import React from 'react'
import "../Styles/Hero.css";
import "../Styles/AboutHero.css";
import aboutheroimg from "../assets/aboutheroimg.svg"

const AboutHero = () => {
  return (
    <div className='hero about-hero-bg'>
      <div className="hero-container">
        <div className="hero-content about-hero-content">
            <h1 className='hero-heading'>
              <p className='about-heading-para'>We Are Constantly Ranked as Best SEO Services Company</p>
              </h1>
            <p className='hero-para'>We are the right digital marketing partner for businesses seeking faster growth and a remarkable online presence.</p>
            <form method="post" className='hero-form about-hero-form'>
                <div className="">
                    <div className="outline-btn">Talk to our Experts</div>
                </div>
                <div className="">
                    <button className="secondary1-btn">Free website Audit</button>
                </div>
            </form>
        </div>
        <div className="hero-image about-hero-img">
            <img src={aboutheroimg} alt="aboutimg" className="hero-img" />
        </div>
      </div>
    </div>
  )
}

export default AboutHero
