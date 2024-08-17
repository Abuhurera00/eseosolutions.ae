import React from 'react'
import "../Styles/GuestQualityControl.css"
import guestcontentqualitycheck from '../assets/guestcontentqualitycheck.png'
import guesthighauthoritywebsites from '../assets/guesthighauthoritywebsites.png'
import guestrightcontentonrightwebsite from '../assets/guestrightcontentonrightwebsite.png'

const GuestQualityControl = () => {
    return (
        <section className='qcontrol-sect'>
            <div className="qcontrol-cont">
                <div className="qcontrol-row">
                    <div className="qcontrol-heading-cont">
                        <h2>What about <span className="readone-theme-color">Quality Control?</span></h2>
                        <p>Leading brands and agencies trust our thorough vetting process. We go beyond metrics alone to find sites with stable histories and quality content. Imagine being able to reverse engineer your competitors’ SEO, content marketing, and social media marketing strategy.</p>
                    </div>
                </div>

                <div className="qcontrol-row qcontrol-align">
                    <div className="qcontrol-col qcontrol-padd-right">
                        <h3 className="readone-theme-color">Content Quality Control</h3>
                        <p>Our expert marketers and content team maintain all required parameters of content.</p>
                        <ul className="list-unstyled lh-lg">
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Valuable & relevant content
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Fair use guidelines
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Unique content
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Structure & formatting
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Explanation of target persona
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Necessary formatting specifications
                            </li>
                        </ul>
                    </div>
                    <div className="qcontrol-col qcontrol-pr">
                        <div className="guest-gp-round-element1"></div>
                        <img src={guestcontentqualitycheck} alt="contentqualitycheck" className="qcontrol-img" />
                    </div>
                </div>

                <div className="qcontrol-row qcontrol-align">
                    <div className="qcontrol-col qcontrol-padd-left order-md-2">
                        <h3 className="readone-theme-color">Website Core Metrics</h3>
                        <p>Websites must be according to requirements. So we check every core metric of guest post website. </p>
                        <ul className="list-unstyled lh-lg">
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Check DA, DR
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                CF/TF
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Google Ranking Websites
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Organic Traffic - 1000+
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                High Authority domain websites
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Google Indexing
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Class C IP
                            </li>
                        </ul>
                    </div>
                    <div className="qcontrol-col qcontrol-pr order-md-1">
                        <div className="guest-gp-round-element2"></div>
                        <img src={guesthighauthoritywebsites} alt="highauthoritywebsites" className="qcontrol-img" />
                    </div>
                </div>

                <div className="qcontrol-row qcontrol-align">
                    <div className="qcontrol-col qcontrol-padd-right">
                        <h3 className="readone-theme-color">Right Content Right Website</h3>
                        <p>To weed out sneaky spam, gamed metrics, and false authority we also evaluate historical factors such as:</p>
                        <ul className="list-unstyled lh-lg">
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Publish right content on right website
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Fact check
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Use of right keywords
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Right delivery & timing
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Brand consistency
                            </li>
                            <li>
                                <i className="fa-solid fa-check seo-me-2"></i>
                                Right anchor text
                            </li>
                        </ul>
                    </div>
                    <div className="qcontrol-col qcontrol-pr">
                        <div className="guest-gp-round-element1"></div>
                        <img src={guestrightcontentonrightwebsite} alt="rightcontentonrightwebsite" className="qcontrol-img" />
                    </div>
                </div>
                <div className="test-btn-cont guest-pt-4">
                    <a href="#" className="outline-btn">Request a Free Quote</a>
                    <a href="#" className="secondary1-btn">Talk to our Expert</a>
                </div>
            </div>
        </section>
    )
}

export default GuestQualityControl
