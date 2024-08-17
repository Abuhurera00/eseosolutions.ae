import React from 'react'
import '../Styles/PricingHero.css'
import pcGroup25581 from '../assets/pcGroup25581.svg'
import pcGroup2559 from '../assets/pcGroup2559.svg'
import pcGroup2560 from '../assets/pcGroup2560.svg'

const PricingHero = () => {
    return (
        <section className="SEHero-sect">
            <div className="seohero-cont">
                <div className="seohero-row seohero-align-items">
                    <div className="seohero-left">
                        <div className="pricinghero-card">
                            <div className="pricinghero-img-cont">
                                <img src={pcGroup25581} alt="Group25581" />
                            </div>

                            <div className="pricinghero-content">
                                <h3>4X Faster Business Growth</h3>
                                <p className="pricinghero-p">Our team of experts run a free SEO audit &amp; excavate exact reasons why your website is losing targeted traffic.</p>
                            </div>
                        </div>

                        <div className="pricinghero-card">
                            <div className="pricinghero-img-cont">
                                <img src={pcGroup2559} alt="Group2559" />
                            </div>

                            <div className="pricinghero-content">
                                <h3>33% Slash in Marketing Costs</h3>
                                <p className="pricinghero-p">Get keyword research done by our SEO experts & drive organic visitors with a high purchase intent only.</p>
                            </div>
                        </div>

                        <div className="pricinghero-card">
                            <div className="pricinghero-img-cont">
                                <img src={pcGroup2560} alt="Group2560" />
                            </div>

                            <div className="pricinghero-content">
                                <h3> General Queries</h3>
                                <p className="pricinghero-p">Looking for a comprehensive understanding about how digital marketing can help you scale your business? Go Ahead</p>
                            </div>
                        </div>
                    </div>


                    <div className="seohero-right">
                        <div className="seohero-form">
                            <h3 className="text-white-h3 SEHero-form-h3">Request Pricing</h3>
                            <p className='SEHero-form-p'>We’ll help you work through the contact details</p>
                            <div id="msg2"></div>
                            <form className="footer_form" id="bform2" name="bform">
                                <div className="seohero-mb-4">
                                    <input type="text" className="seohero-form-control" name="name" id="name" placeholder="Full Name*" required="" />
                                </div>
                                <div className="seohero-mb-4">
                                    <input type="email" className="seohero-form-control" name="email" id="email" placeholder="Email Address*" required="" />
                                </div>
                                <div className="seohero-mb-4">
                                    <input type="text" className="seohero-form-control" id="phone" name="phone" placeholder="Phone Number*" required="" />
                                </div>

                                <div className="seohero-mb-4">
                                    <input type="text" className="seohero-form-control" name="website" id="website" placeholder="Website URL*" required="" />
                                </div>
                                <div className="seohero-mb-4">
                                    <input type="text" className="seohero-form-control" name="company" id="company" placeholder="Company Name" />
                                </div>
                                <button type="submit" className="form-btn">Request free quote</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default PricingHero
