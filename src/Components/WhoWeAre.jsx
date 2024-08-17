import React from 'react'
import "../Styles/WhoWeAre.css";
import aboutwhoimg3 from "../assets/aboutwhoimg3.jpg"
import aboutgraphimg from "../assets/aboutgraphimg.jpg"

const WhoWeAre = () => {
  return (
    <section className='who-section'>
      <div className="who-container">
        <div className="who-row who-align-items">
            <div className="who-left-content">
                <div className="who-image-holder">
                    <img src={aboutwhoimg3} alt="about-new-img3.jpg" className="who-img" />
                    <img src={aboutgraphimg} alt="about-new-img4.jpg" className="who-img who-position" />
                </div>
                <a href="#" className='theme-color'><i className="fa-regular fa-circle-play"></i>See how we work</a>
            </div>

            <div className="who-right-content">
                <span className="who-span">Who We Are </span>
                <h2>We're your partner in your success</h2>
                <h5 className='who-h5'>We have been offering the best-in-class and result-oriented IT services worldwide<br/> for over a decade.</h5>
                <p>ESEO is a rapidly emerging digital marketing service company offering aspiring, modern, organic, and trending SEO solutions. We are a team of expert internet marketers who work to bring growth and success to your business in today's fiercely challenging business world. We ensure to offer top-notch benefits to our clients.</p>
                <h3>Our Mission</h3>
                <p>We aim to exceed our clients' expectations by offering them the most innovative, efficient, and unique digital marketing services to increase their profitability and productivity worldwide.</p>
                <h3>Our Vission</h3>
                <p>To derive the expected results, it is vital to have a clear path and stay focused that will assist you in achieving your goals. Our vision is to leverage the full potential of the Internet to deliver measurable outcomes to our clients.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
