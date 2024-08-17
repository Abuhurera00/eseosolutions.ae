import React from 'react'
import '../Styles/SEWHychoose.css'
import selaptop from '../assets/selaptop.svg'
import semicroscope from '../assets/semicroscope.svg'
import Group3687 from '../assets/Group3687.svg'
import Group36861 from '../assets/Group36861.svg'
import Group2211 from '../assets/Group2211.svg'
import Group2212 from '../assets/Group2212.svg'
import Group2213 from '../assets/Group2213.svg'
import Group2214 from '../assets/Group2214.svg'

const SEWHychoose = () => {
    return (
        <section className='whychooseus-sect'>
            <div className="wave wave-d-none improve-position">
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

            <div className="whychooseus-cont">
                <div className="whychooseus-row">
                    <div className="whychooseus-col">
                        <h2 className="whychooseus-h2">Why Choose Us for PPC Management Services?</h2>
                        <p className="whychooseus-h2">We have several unmatched portfolios of satisfied clients &amp; brands that are still in touch with our company. 90% of clients have long-lasting relationships with us than our agencies because of our in-house skilled &amp; dedicated professionals. Our motto is to deliver quality PPC services no matter what business. Let us help your business to gain a competitive edge in your industry. Here are some reasons why our clients count on us for PPC services:
                        </p>
                        <div className="whychooseus-row whychooseus-mt">
                            <div className="whychooseus-card">
                                <div className="whychooseus-card-content">
                                    <img src={selaptop} alt="Group2036852" className="whychooseus-img" />
                                    <h4 className="whychooseus-h4">Higher ROI</h4>
                                </div>
                            </div>
                            <div className="whychooseus-card">
                                <div className="whychooseus-card-content">
                                    <img src={semicroscope} alt="Group3686" className="whychooseus-img" />
                                    <h4 className="whychooseus-h4">Increased Market Share</h4>
                                </div>
                            </div>
                            <div className="whychooseus-card">
                                <div className="whychooseus-card-content">
                                    <img src={Group3687} alt="Group3687" className="whychooseus-img" />
                                    <h4 className="whychooseus-h4">Proven Ability to Scale</h4>
                                </div>
                            </div>
                            <div className="whychooseus-card">
                                <div className="whychooseus-card-content">
                                    <img src={Group36861} alt="Group36861" className="whychooseus-img" />
                                    <h4 className="whychooseus-h4">Lowered Cost-Per-Conversion</h4>
                                </div>
                            </div>
                            <div className="whychooseus-card">
                                <div className="whychooseus-card-content">
                                    <img src={Group2211} alt="Group2211" className="whychooseus-img" />
                                    <h4 className="whychooseus-h4">Foreign Market Expansion</h4>
                                </div>
                            </div>
                            <div className="whychooseus-card">
                                <div className="whychooseus-card-content">
                                    <img src={Group2212} alt="Group2212" className="whychooseus-img" />
                                    <h4 className="whychooseus-h4">Premier Google Partner</h4>
                                </div>
                            </div>
                            <div className="whychooseus-card">
                                <div className="whychooseus-card-content">
                                    <img src={Group2213} alt="Group2213" className="whychooseus-img" />
                                    <h4 className="whychooseus-h4">Custom-Tailored Strategic Planning</h4>
                                </div>
                            </div>
                            <div className="whychooseus-card">
                                <div className="whychooseus-card-content">
                                    <img src={Group2214} alt="Group2214" className="whychooseus-img" />
                                    <h4 className="whychooseus-h4">Dedicated Account Manager</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="test-btn-cont whychoose-btn-mt">
                    <a href="#" className="outline-btn whychoose-btn-cb">Request a Free Quote</a>
                    <a href="#" className="secondary1-btn">Talk to our Expert</a>
                </div>
            </div>
        </section>
    )
}

export default SEWHychoose
