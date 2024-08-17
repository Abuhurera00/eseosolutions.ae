import React from 'react'
import "../Styles/SeoServices.css";
import seoblocksimg from "../assets/seoblocksimg.png"
import ecommercemarketimg from "../assets/ecommercemarketimg.png"
import gpimg from "../assets/gpimg.png"
import seoappstoreimg from "../assets/seoappstoreimg.png"
import mobileappimg from "../assets/mobileappimg.png"
import seocontentmarketingimg1 from "../assets/seocontentmarketingimg1.png"

const SeoServices = () => {
    return (
        <section className='seoservices-sect factors'>
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

            {/* Services we offer===================================================================== */}
            <div className="seoservices-offer-cont seo-pr">
                <div className="seoservices-row seoservices-align">
                    <div className="seoservices-content pe-xl-6">
                        <h2 className='seoservices-h2'>Services We Offer</h2>
                        <h3 className='seoservices-h3'>Want to generate more traffic to your website?
                            We know how to drive long-term growth</h3>
                    </div>
                    <div className="seoservices-content">
                        <p className="seoservices-p">Our search engine optimization service gives your business the opportunity to acquire the first position every time someone searches for your product or service, thus increasing your sales permanently. In addition, our dedicated content team makes every effort to ensure your content is delivered in such a way that makes it easy for visitors to find the information they seek, resulting in a pleasant and productive user experience.</p>
                    </div>
                </div>
            </div>


            {/* Images div============================================================ */}
            <div className="seoservices-images-cont">
                <div className="seoservices-row text-center">
                    <div className="seoservices-img-col">
                        <div className="seoservices-inner-col">
                            <div className="seoservices-row">
                                <div className="col-md-6 text-left">
                                    <h3>Global SEO</h3>
                                    <p>We combine creative SEO tactics, enhanced marketing techniques, and high-end inbound content marketing to help businesses rank in the targeted country.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="seoservices-img-col">
                        <div className="seoservices-inner-col">
                            <img src={seoblocksimg} alt="local-seo-img" className='serserve-img' />
                            <h3>Local SEO</h3>
                            <p>We help position your business in the first position of local searches performed by users.</p>
                        </div>
                    </div>

                    <div className="seoservices-img-col">
                        <div className="seoservices-inner-col">
                            <h3>National SEO</h3>
                            <p> Our highly SEO professional team has in-depth knowledge of the ongoing market trends and can make you a national leader in no time.</p>
                        </div>
                    </div>

                    <div className="seoservices-img-col">
                        <div className="seoservices-inner-col seo-rounded-3">
                            <img src={ecommercemarketimg} alt="ecommerce-market-img" className='seoserve-img' />
                            <h3>E-Commerce Marketing</h3>
                            <p>Driving traffics to your eCommerce store in no time with our out of the box SEO strategy</p>
                        </div>
                    </div>

                    <div className="seoservices-img-col seo-seo-mb-4">
                        <div className="seoservices-inner-col">
                            <img src={gpimg} alt="gpimg" className='serserve-img' />
                            <h3>Guest Posting</h3>
                            <p>Boost up the organic traffic and get listed among the popular brands in the industry with niche relevant guest posts.</p>
                        </div>
                    </div>

                    <div className="seoservices-img-col seo-seo-mb-4">
                        <div className="p-24">
                            <img src={seoappstoreimg} alt="seoappstoreimg" className='serserve-img' />
                            <h3>App Store Optimisation</h3>
                            <p>Increase your app download with our unique mobile app marketing services</p>
                        </div>
                    </div>

                    <div className="seoservices-img-col seo-seo-mb-4">
                        <div className="seoservices-inner-col">
                            <img src={mobileappimg} alt="mobileappimg" className='serserve-img' />
                            <h3>Mobile App-marketing</h3>
                            <p>Boost the download of your apps on the playstore with our unique mobile app marketing services</p>
                        </div>
                    </div>

                    <div className="seoservices-img-col seo-seo-mb-4">
                        <div className="seoservices-inner-col">
                            <div className="seoservices-row">
                                <div className="col-md-6 text-left">
                                    <h3>Content Marketing</h3>
                                    <p>Get your business displayed with impeccable content and engage the audience with the right product information.</p>
                                </div>
                                <div className="col-md-6">
                                    <img src={seocontentmarketingimg1} alt="seocontentmarketingimg1" className="img-fluid seo-mb-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="test-btn-cont">
                    <a href="#" className="outline-btn">Request a Free Quote</a>
                    <a href="#" className="secondary1-btn">Talk to our Expert</a>
                </div>
            </div>


        </section>
    )
}

export default SeoServices
