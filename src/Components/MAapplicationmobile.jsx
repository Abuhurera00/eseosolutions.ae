import React from 'react'
import "../Styles/Knowmore.css";
import maCareer from "../assets/maCareer.png"
import maGroup4148z from "../assets/maGroup4148z.png"
import maGroup4149z from "../assets/maGroup4149z.png"
import maPath8135 from "../assets/maPath8135.png"

const MAapplicationmobile = () => {
  return (
    <section className='konw-section' style={{backgroundColor: "#F1F8FF"}}>
            <div className="know-container">
                <div className="know-row know-align-items">
                    <div className="know-left col-md-6">
                        <h2>Why Choose Our Dedicated ASO Company For Your Mobile Application Needs?</h2>
                        <p className="know-p">We ensure that your website gets valuble traffics that converts into leads</p>
                        <p>ASO Company or App Store Optimization Company Dubai, extends the best support in this context. Rather than spending days over strategic and structural changes in your app, we work hard towards offering actionable insights through effective app marketing. We work with clients across industry verticals, thus having an idea about each of their requirements. As mobile app store and App search optimization involve important strategies and techniques, we take time to analyze the exact marketing needs of clients. You should work with us as we provide:</p>
                        <div className="know-d-flex">
                            <a href="#" className="outline-btn">talk to our Expert</a>
                            <a href="#" className="secondary1-btn">Free Website Audit</a>
                        </div>
                    </div>
                    <div className="know-right col-md-6">
                        <div className="know-row">
                            <div className="know-col pt-md-4">
                                <span className="know-card">
                                    <img src={maCareer} alt="maCareer" className="konw-img" />
                                    <h3 className='know-h3'>Easy CRM Tools</h3>
                                    <p className="know-small">We use CRM tools to help build and manage relationships with our clients by providing update on daily task. The tool is simple & easy-to-use.</p>
                                </span>

                                <span className="know-card">
                                    <img src={maGroup4148z} alt="maGroup4148z" className="konw-img" />
                                    <h3 className='know-h3'>Dedicated Project Manager</h3>
                                    <p className="know-small">We understand the importance of a personal touch that why we provide a dedicated account manager for better coordination and communication.</p>
                                </span>
                            </div>
                            <div className="know-col pt-md-5 mt-md-5">
                                <span className="know-card">
                                    <img src={maGroup4149z} alt="maGroup4149z" className="konw-img" />
                                    <h3 className='know-h3'>Excellent Customer Support</h3>
                                    <p className="know-small">Customer support is our first priority, our Project Managers are available during your working hours to ensure better communication</p>
                                </span>

                                <span className="know-card">
                                    <img src={maPath8135} alt="maPath8135" className="konw-img" />
                                    <h3 className='know-h3'>Performance Tracking</h3>
                                    <p className="know-small">Our daily, weekly & monthly updates help you to track progress of your website and what is planned for coming months</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default MAapplicationmobile
