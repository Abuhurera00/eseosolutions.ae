import React from 'react'
import "../Styles/Improvesearch.css";
import '../Styles/SEindustryserve.css'
import Group4154 from "../assets/Group4154.png"
import Group4155 from "../assets/Group4155.png"
import Group4156 from "../assets/Group4156.png"
import Group4157 from "../assets/Group4157.png"
import Group4158 from "../assets/Group4158.png"
import Group4159 from "../assets/Group4159.png"

const SMIndustryserve = ({paragraphText }) => {
    return (
        <section className='industries-sect smindustry-sect' style={{ backgroundColor: "#0fcc7c" }}>

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

            <div className="industries-cont">
                <h2 style={{ textAlign: 'center' }}>Industries We Serve</h2>
                <p style={{ textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: paragraphText }}>
                    {/* Business isn't one size fits all. Every industry requires a custom solution.<br />
                    Learn more about how we've helped businesses in your industry by clicking below. */}
                    </p>
                <div className="industries-row industries-text-center">


                    {/* boxes */}
                    <div className="SEindustries-box-col">
                        <div className="SEindustries-box">
                            <div className="industries-box-img-holder">
                                <img src={Group4154} alt="Group4154" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                                <h3 className="SEindustry-h3">Healthcare</h3>
                                <p className="industries-p">We assist healthcare businesses in getting more leads, increasing the site's relevance and semantics in search results. </p>
                            </div>
                        </div>
                    </div>

                    <div className="SEindustries-box-col">
                        <div className="SEindustries-box">
                            <div className="industries-box-img-holder">
                                <img src={Group4155} alt="Group4155" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                                <h3 className="SEindustry-h3">Finance</h3>
                                <p className="industries-p">We assist credit unions, mortgage companies, and financial advisors with our SEO service.</p>
                            </div>
                        </div>
                    </div>

                    <div className="SEindustries-box-col">
                        <div className="SEindustries-box">
                            <div className="industries-box-img-holder">
                                <img src={Group4156} alt="Group4156" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                                <h3 className="SEindustry-h3">Infrastructure</h3>
                                <p className="industries-p">Our SEO experts improve your business's reliability and searches in less time and budget.</p>
                            </div>
                        </div>
                    </div>

                    <div className="SEindustries-box-col">
                        <div className="SEindustries-box">
                            <div className="industries-box-img-holder">
                                <img src={Group4157} alt="Group4157" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                                <h3 className="SEindustry-h3">Government</h3>
                                <p className="industries-p">We serve the right SEO strategy and ownership for government websites.</p>
                            </div>
                        </div>
                    </div>

                    <div className="SEindustries-box-col">
                        <div className="SEindustries-box">
                            <div className="industries-box-img-holder">
                                <img src={Group4158} alt="Group4158" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                                <h3 className="SEindustry-h3">Entertainment</h3>
                                <p className="industries-p">Enabling the entertainment industry to secure more customers and grow their business online</p>
                            </div>
                        </div>
                    </div>

                    <div className="SEindustries-box-col">
                        <div className="SEindustries-box">
                            <div className="industries-box-img-holder">
                                <img src={Group4159} alt="Group4159" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                                <h3 className="SEindustry-h3">Automotive</h3>
                                <p className="industries-p">We assist automotive industries leverage our SEO services to gain long term growth.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SMIndustryserve
