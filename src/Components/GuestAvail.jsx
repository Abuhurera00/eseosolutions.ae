import React from 'react'
import '../Styles/GuestAvail.css'
import guestAgencyOwners from "../assets/guestAgencyOwners.svg"
import guestWebsiteOwners from "../assets/guestWebsiteOwners.svg"
import guestBlogger from "../assets/guestBlogger.svg"
import guestAffiliateMarketer from "../assets/guestAffiliateMarketer.svg"
import guestCPAMarketing from "../assets/guestCPAMarketing.svg"
import guestSEOManager from "../assets/guestSEOManager.svg"

const GuestAvail = () => {
    return (
        <section className='avail-sect'>
            <div className="avail-cont">
                <h2>Who Can Avail This Service?</h2>
                <h3>We, at Outreach Monks, make sure that our Guest Post Service fits diverse requirements. </h3>
                <div className="avail-row avail-start">
                    <div className="avail-col">
                        <div className="avail-card">
                            <div className="avail-dflex">
                                <img src={guestAgencyOwners} alt="AgencyOwners" className="avail-img" />
                                <div className="avail-card-content">
                                    <h3 className="">Agency Owners</h3>
                                    <p>Scale your business while we fulfill your outreach orders and send you white labeled reports</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="avail-col">
                        <div className="avail-card">
                            <div className="avail-dflex">
                                <img src={guestWebsiteOwners} alt="WebsiteOwners" className="avail-img" />
                                <div className="avail-card-content">
                                    <h3 className="">Website Owners</h3>
                                    <p>Ranking on Google is easier with our guest post services that deliver better rankings and ROI. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="avail-col">
                        <div className="avail-card">
                            <div className="avail-dflex">
                                <img src={guestBlogger} alt="Blogger" className="avail-img" />
                                <div className="avail-card-content">
                                    <h3 className="">Blogger</h3>
                                    <p>Boost the authority and improve the positions of traffic driving keywords with our guest post service. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="avail-col avail-mb-4">
                        <div className="avail-card">
                            <div className="avail-dflex">
                                <img src={guestAffiliateMarketer} alt="AffiliateMarketer" className="avail-img" />
                                <div className="avail-card-content">
                                    <h3 className="">Affiliate Marketer</h3>
                                    <p>Get quick, evergreen organic traction through result-based blogger outreach services that can boost your revenue exponentially.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="avail-col avail-mb-4">
                        <div className="avail-card">
                            <div className="avail-dflex">
                                <img src={guestCPAMarketing} alt="CPAMarketing" className="avail-img" />
                                <div className="avail-card-content">
                                    <h3 className="">Freelance SEO Consultant</h3>
                                    <p>Why struggle with link building orders when we can help you execute it with our white label guest post services. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="avail-col avail-mb-4">
                        <div className="avail-card">
                            <div className="avail-dflex">
                                <img src={guestSEOManager} alt="SEOManager" className="avail-img" />
                                <div className="avail-card-content">
                                    <h3 className="">SEO Manager</h3>
                                    <p>In-house talent crunch shouldn’t deter you from taking up more link building orders. We can help you meet deadlines fast and easy!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row-btn avail-pt-0">
                <a href="#" className="secondary-btn">Request a Free Quote</a>
                    <a href="#" className="outline-btn">Talk to our Experts</a>
                </div>
            </div>
        </section>
    )
}

export default GuestAvail
