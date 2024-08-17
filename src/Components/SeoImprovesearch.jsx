import React from 'react'
import "../Styles/Improvesearch.css";

const SeoImprovesearch = ({seoHeading}) => {
  return (
    <section className='improve-search'>
    <div className="wave improve-position">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="improve-cont">
      <div className="improve-row">
          <div className="improve-col">
              <h2>{seoHeading}
                {/* Would you like to increase your ranking now? */}
                </h2>
              <h3>Reach out to our expert digital marketing consultants to discuss how eSEO Solutions can help you achieve your goals.</h3>
              <a href="#" className="improve-btn">Get Started Now</a>
          </div>
          <div className="improve-empty"></div>
      </div>
    </div>
  </section>
  )
}

export default SeoImprovesearch
