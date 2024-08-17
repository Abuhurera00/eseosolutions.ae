import React from 'react'
import '../Styles/SMsmopartner.css'
import urbandoinghomework from '../assets/urbandoinghomework.png'
import urban851 from '../assets/urban851.png'
import urban931 from '../assets/urban931.png'
import Group3763 from '../assets/Group3763.png'

const SMsmopartner = () => {
    return (
        <section className='smo-sect'>
            <div className="smo-pt">
                <div className="smo-cont">
                    <div className="smo-row smo-center">
                        <div className="smo-top-col">
                            <h2>Why Choose e-SEO as Your SMO Partner?</h2>
                            <p className="smo-p">At e-SEO, we provide the best SMO services concentrated on new followers generation, engaging the available users, generating profit-generating campaigns that offer real results, hence assuring your firm's development and success.</p>
                        </div>
                    </div>


                    <div className="smo-row smo-mt">
                        <div className="smo-mid-col">
                            <div className="smo-card">
                                <img src={urbandoinghomework} alt="urbandoinghomework" className="smo-img" />
                                <div>
                                    <h3 className='smo-h3'>Higher Conversion Rates</h3>
                                    <p>We directly target the specific audience, which increases the conversion rates. we hold the credibility of a skilled team. Likely, by having years of experience and noteworthy expertise, </p>
                                </div>
                            </div>

                            <div className="smo-card">
                                <img src={urban851} alt="urban851" className="smo-img" />
                                <div>
                                    <h3 className='smo-h3'>Increase in Traffic</h3>
                                    <p>We create the content for your social media that help you to increase the traffic.  we hold the credibility of a skilled team. Likely, by having years of experience and noteworthy expertise, our team serves the purpose</p>
                                </div>
                            </div>
                        </div>

                        <div className="smo-mid-col smo-padd">
                            <div className="smo-card">
                                <img src={urban931} alt="urban931" className="smo-img" />
                                <div>
                                    <h3 className='smo-h3'>Cost-effective</h3>
                                    <p>We offer the best cost-effective SMO services to generate quick and effective results. we hold the credibility of a skilled team. Likely, by having years of experience and noteworthy expertise</p>
                                </div>
                            </div>

                            <div className="smo-card">
                                <img src={Group3763} alt="Group3763" className="smo-img" />
                                <div>
                                    <h3 className='smo-h3'>Use Influencers</h3>
                                    <p>We use influencers to promote your business and brand to the appropriate audience. With the competency and trained personnel in the segment of SMO, we hold the credibility of a skilled team. Likely, </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="test-btn-cont guest-pt-4">
                        <a href="#" className="outline-btn">Request a Free Quote</a>
                        <a href="#" className="secondary1-btn">Talk to our Expert</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SMsmopartner
