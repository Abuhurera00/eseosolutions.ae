import React from 'react'
import "../Styles/Improvesearch.css";
import '../Styles/SEImprovesect.css'

const SEImprovesect = () => {
  return (
    <section className='improve-search seimproves-sect' style={{backgroundColor: '#0fcc7c'}}>
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
                <h2>Get more from your Google Ads account</h2>
                <h3>Get your free, no obligation Google Ads audit today
                to find out how the PPC Geeks can help you.</h3>
                <a href="#" className="improve-btn seimprove-btn">Get Started Now</a>
            </div>
            <div className="improve-empty"></div>
        </div>
      </div>
    </section>
  )
}

export default SEImprovesect
