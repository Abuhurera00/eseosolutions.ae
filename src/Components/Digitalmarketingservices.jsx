import React from 'react'
import "../Styles/Digitalmarketingservices.css";
import SearchEngineOptimization from "../assets/SearchEngineOptimization.svg"
import Guest from "../assets/Guest.svg"
import eye from "../assets/eye.svg"
import person from "../assets/person.svg"
import ContentMarketingServices from "../assets/ContentMarketingServices.svg"
import MobileAppMarketing from "../assets/MobileAppMarketing.svg"

const Digitalmarketingservices = () => {
  return (
    <section className='services-section'>
      <div className="ver-divider"></div>
      <div className="ver-divider1"></div>

      <div className="services-container">
        <div className="services-flex">
            <div className="services-left">
                <h2 className="services-heading-h2">Digital Marketing Services</h2>
                <h3 className='services-heading-h3'>SEO Management & Strategy Services</h3>
                <p className="services-para">Our certified SEO managers create top-end marketing strategies to achieve the positioning you have been waiting for, and that will provide you with the benefits you deserve. We analyze your business goals and create strategies to maximize the business reach, visibility, and sales.</p>
                <a href="#" className="services-btn d-none">Get started Now</a>
            </div>

        <div className="services-right">
            <div className="services-right-row">
                <div className="col-1 col">
                    <span className="span-col active">
                        <img src={SearchEngineOptimization} alt="SearchEngineOptimization" className="span-img" />
                        <span className="span-text">Search Engine Optimization</span>
                    </span>
                    <span className="span-col">
                        <img src={person} alt="Social media marketing" className='span-img' />
                        <span className='span-text'>Social Media Marketing</span>
                    </span>
                </div>
                <div className="col-2 col">
                <span className="span-col active">
                        <img src={Guest} alt="Social media marketing" className="span-img" />
                        <span className="span-text">Search Engine Optimization</span>
                    </span>
                    <span className="span-col">
                        <img src={ContentMarketingServices} alt="Social media marketing" className='span-img' />
                        <span className='span-text'>Social Media Marketing</span>
                    </span>
                </div>
                <div className="col-3 col">
                <span className="span-col">
                        <img src={eye} alt="ContentMarketingServices" className="span-img" />
                        <span className="span-text">Search Engine Optimization</span>
                    </span>
                    <span className="span-col">
                        <img src={MobileAppMarketing} alt="MobileAppMarketing" className='span-img' />
                        <span className='span-text'>Social Media Marketing</span>
                    </span>
                </div>
            </div>
            <a href="#" className="sm-btn d-md-none">Get started now</a>
        </div>

        </div>
      </div>
    </section>
  )
}

export default Digitalmarketingservices
