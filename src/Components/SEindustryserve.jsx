import React from 'react'
import '../Styles/SEindustryserve.css'
import Grouph2269 from "../assets/Grouph2269.svg"
import Group2269 from "../assets/Group2269.svg"
import Group2273 from "../assets/Group2273.svg"
import Group2268 from "../assets/Group2268.svg"
import Group2271 from "../assets/Group2271.svg"
import Group2267 from "../assets/Group2267.svg"

const SEindustryserve = () => {
    return (
        <section className='industries-sect' style={{ backgroundColor: "#F1F8FF" }}>
            <div className="industries-cont">
            <h2 style={{textAlign: 'center'}}>Industries We Serve</h2>
            <p style={{textAlign: 'center'}}>At eSEO, we work with varied industries to boost their business visibility and bring more leads.</p>
                <div className="industries-row industries-text-center">


                    {/* boxes */}
                    <div className="SEindustries-box-col">
                        <div className="SEindustries-box">
                            <div className="industries-box-img-holder">
                                <img src={Grouph2269} alt="Grouph2269" className='industries-img' />
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
                                <img src={Group2269} alt="Group2269" className='industries-img' />
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
                                <img src={Group2273} alt="Group2273" className='industries-img' />
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
                                <img src={Group2268} alt="Group2268" className='industries-img' />
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
                                <img src={Group2271} alt="Group2271" className='industries-img' />
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
                                <img src={Group2267} alt="Group2267" className='industries-img' />
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

export default SEindustryserve
