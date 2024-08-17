import React from 'react'
import '../Styles/Industriesweserve.css'
import seohealthcareicon from "../assets/seohealthcareicon.svg"
import seofinanceicon from "../assets/seofinanceicon.svg"
import seoinfrastructureicon from "../assets/seoinfrastructureicon.svg"
import seoGovernment from "../assets/seoGovernment.svg"
import seoentertainmenticon from "../assets/seoentertainmenticon.svg"
import seoautomotiveicon from "../assets/seoautomotiveicon.svg"

const Industriesweserve = () => {
    return (
        <section className='industries-sect'  style={{background: "url(../assets/seoindustrycircle.svg) no-repeat right -30% top / auto 100%"}}>
            <div className="industries-cont">
                <div className="industries-row industries-text-center">
                    <div className="indstries-head-cont">
                        <h2 className="industry-blue-color">Industries We Serve</h2>
                        <h3>At eSEO, we work with varied industries to boost their business visibility and bring more leads.</h3>
                    </div>

                    <div className="industries-para-cont">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use
                        </p>
                    </div>

                    {/* boxes */}
                     <div className="industries-box-col">
                        <div className="industries-box health">
                            <div className="industries-box-img-holder">
                                <img src={seohealthcareicon} alt="seohealthcareicon" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                            <h3>Healthcare</h3>
                            <p className="industries-p">We assist healthcare businesses in getting more leads, increasing the site's relevance and semantics in search results. </p>
                            </div>
                        </div>
                     </div>

                     <div className="industries-box-col">
                        <div className="industries-box">
                            <div className="industries-box-img-holder">
                                <img src={seofinanceicon} alt="seofinanceicon" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                            <h3>Finance</h3>
                            <p className="industries-p">We assist credit unions, mortgage companies, and financial advisors with our SEO service.</p>
                            </div>
                        </div>
                     </div>

                     <div className="industries-box-col">
                        <div className="industries-box">
                            <div className="industries-box-img-holder">
                                <img src={seoinfrastructureicon} alt="seoinfrastructureicon" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                            <h3>Infrastructure</h3>
                            <p className="industries-p">Our SEO experts improve your business's reliability and searches in less time and budget.</p>
                            </div>
                        </div>
                     </div>

                     <div className="industries-box-col">
                        <div className="industries-box">
                            <div className="industries-box-img-holder">
                                <img src={seoGovernment} alt="seoGovernment" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                            <h3>Government</h3>
                            <p className="industries-p">We serve the right SEO strategy and ownership for government websites.</p>
                            </div>
                        </div>
                     </div>

                     <div className="industries-box-col">
                        <div className="industries-box">
                            <div className="industries-box-img-holder">
                                <img src={seoentertainmenticon} alt="seoentertainmenticon" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                            <h3>Entertainment</h3>
                            <p className="industries-p">Enabling the entertainment industry to secure more customers and grow their business online</p>
                            </div>
                        </div>
                     </div>

                     <div className="industries-box-col">
                        <div className="industries-box">
                            <div className="industries-box-img-holder">
                                <img src={seoautomotiveicon} alt="seoautomotiveicon" className='industries-img' />
                            </div>
                            <div className="industries-box-content">
                            <h3>Automotive</h3>
                            <p className="industries-p">We assist automotive industries leverage our SEO services to gain long term growth.</p>
                            </div>
                        </div>
                     </div>

                </div>
            </div>
        </section>
    )
}

export default Industriesweserve
