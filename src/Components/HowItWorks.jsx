import React from 'react'
import "../Styles/HowItWorks.css"
import guestworkclouds from '../assets/guestworkclouds.png'
import guestlaptop from '../assets/guestlaptop.png'
import guestproposals from '../assets/guestproposals.png'

const HowItWorks = () => {
    return (
        <section className='guestwork-sect'>
            <div className="guestwork-cont">
                <h2 className="guestwork-h2">How it Works</h2>
                <span className="guestwork-span">Order, Approve, Report</span>
                <div className="guestwork-row">
                    <div className="guestwork-col">
                        <div className="guestwork-row guestwork-align guestwork-mt-5">
                            <div className="guestwork-img-holder guestwork-right guestwork-pr">
                                <span className="guestwork-vl guestwork-position-absolute"></span>
                                <img src={guestworkclouds} alt="download" />
                            </div>
                            <div className="guestwork-content-holder guestwork-left guestwork-dflex">
                                <span className="guestwork-content-span">1</span>
                                <div className="guestwork-words">
                                    <h3>Place Your Order</h3>
                                    <p>Share your desired URLs and the anchor text you’d like placed within each post, and we’ll get to work Share your desired URLs and the anchor text you’d like placed within each post, and we’ll get to work!!</p>
                                </div>
                            </div>
                        </div>

                        <div className="guestwork-row guestwork-align">
                        <div className="guestwork-img-holder guestwork-left order-md-2 guestwork-pr">
                                <span className="guestwork-vl guestwork-position-absolute"></span>
                                <img src={guestlaptop} alt="download" />
                            </div>
                            <div className="guestwork-content-holder guestwork-right order-md-1 guestwork-dflex">
                                <span className="guestwork-content-span span-ms-md-2 order-md-2">2</span>
                                <div className="guestwork-words guest-md-end order-md-1">
                                    <h3>Quality Control</h3>
                                    <p>We’ll send you a list of sites that fit your criteria to approve or veto. Then, our writers create content that fits your targets and each site’s specific publishing guidelines</p>
                                </div>
                            </div>
                        </div>

                        <div className="guestwork-row guestwork-align">
                        <div className="guestwork-img-holder guestwork-right guestwork-pr">
                                <span className="guestwork-vl guestwork-position-absolute"></span>
                                <img src={guestproposals} alt="download" />
                            </div>
                            <div className="guestwork-content-holder guestwork-left guestwork-dflex">
                                <span className="guestwork-content-span">3</span>
                                <div className="guestwork-words">
                                    <h3>Publish, Review, & Report</h3>
                                    <p>Our team will manually verify that your link is placed as-ordered, naturally within the content. Then, we’ll send you a white-label report (sample) with links to the guest posts you purchased.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row-btn guestwork-mt-xl-4">
                    <a href="#" className="outline-btn">See All Case Study</a>
                    <a href="#" className="secondary-btn">Talk to our Experts</a>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
