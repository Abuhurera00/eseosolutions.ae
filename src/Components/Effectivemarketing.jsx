import React from 'react'
import "../Styles/Effectivemarketing.css";
import checkcircle from "../assets/checkcircle.png"

const Effectivemarketing = () => {
  return (
    <section className="effective-section">
      <div className="multi-spans">
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

     <div className="effective-container">
        <div className="effective-row">
            <div className="effective-image-cont">
                <div className="effective-text-cont">
                    <h2 className="effective-image-heading">Are you <span className="fst">Frustrated</span> <span className="grow-seo">with your SEO Growth<br/>and  Marketing</span></h2>
                    <ul className="effective-ul">
                        <li className="effective-li"><i className="fa-solid fa-xmark"></i>Google Keeps Changing its Algorithms</li>
                        <li className="effective-li"><i className="fa-solid fa-xmark"></i>Poorly Designed Sites Outranking You</li>
                        <li className="effective-li"><i className="fa-solid fa-xmark"></i>Frustrated With Organic Search Performance</li>
                    </ul>
                </div>
            </div>


            <div className="effective-grid-cont">
                <h2 className="effective-grid-heading">We Bring You Effective Marketing Solutions</h2>
                <p className='effective-grid-para'>Being a renowned SEO solutions company, we offer the most advanced positioning techniques to increase your brand visibility and the income it deserves. SEO, SEM, Social Media, and the best Web Design go hand in hand in our digital marketing strategies to achieve the best possible results.</p>
            <div className="effective-grid-content">
                <div className="grid-inner-content">
                    <div className="inner-heading">
                        <img src={checkcircle} alt="checkcircle" />
                        <h3>Dedicated Growth Manager</h3>
                    </div>
                    <p>A dedicated and experienced digital marketing manager helps increase the traffic and conversions of your website to increase your sales.</p>
                </div>
                <div className="grid-inner-content border-start">
                <div className="inner-heading">
                        <img src={checkcircle} alt="checkcircle" />
                        <h3>Top-Of-the-Line Customer Support</h3>
                    </div>
                    <p>If we are proud of something, it is our seriousness and constant communication that sets us apart.</p>
                </div>
                <div className="grid-inner-content border-start">
                <div className="inner-heading">
                        <img src={checkcircle} alt="checkcircle" />
                        <h3>Data-Backed Marketing Solutions</h3>
                    </div>
                    <p>We provide weekly and monthly reports to our clients with the main statistical variables so you can track effectiveness.</p>
                </div>
                <div className="grid-inner-content">
                <div className="inner-heading">
                        <img src={checkcircle} alt="checkcircle" />
                        <h3>Transparent Goal Planning & Execution</h3>
                    </div>
                    <p>We capture the identity and values of your brand to strategically plot our next move before charging forward - all for the sake of a little something we like to call results.</p>
                </div>
                <div className="grid-inner-content border-start">
                <div className="inner-heading">
                        <img src={checkcircle} alt="checkcircle" />
                        <h3>Result-Oriented & ROI-Based Approach</h3>
                    </div>
                    <p>Our results-driven approach helps maximize the profitability of your business and increase ROI.</p>
                </div>
                <div className="grid-inner-content border-start d-flex">
                <div className="inner-heading">
                        <h3>Let’s Discuss your Project</h3>
                    </div>
                    <a href="#">Connect now</a>
                </div>
            </div>

            </div>
        </div>
     </div>

    </section>
  )
}

export default Effectivemarketing
