import React from 'react'
import '../Styles/MAHero.css'

const MAHero = () => {
  return (
    <section className="SEHero-sect">
            <div className="seohero-cont">
                <div className="seohero-row seohero-align-items">
                    <div className="seohero-left">
                        <h1 className='mahero-h1'>
                        App Store Optimization (ASO) Services Company in Dubai
                        </h1>
                        <div className="seohero-row">
                        <div className="mahero-ul-cont">
                                <ul className="mahero-ul">
                                    <li>
                                    Rank Your App for Top Keyword
                                    </li>
                                    <li>
                                    Increase App Downloads and User Acquisition
                                    </li>
                                    <li>
                                    Get More Organic Downloads
                                    </li>
                                    <li>
                                    Improve App Reviews and Ratings
                                    </li>
                                    <li>
                                    Promotional Advertising & Strategies
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="know-d-flex seohero-d-none seohero-d-md-block">
                            <a href="#" className="outline-btn">talk to our Expert</a>
                            <a href="#" className="secondary1-btn">Free Website Audit</a>
                        </div>
                    </div>


                    <div className="seohero-right">
                        <div className="seohero-form">
                            <h3 className="text-white-h3 SEHero-form-h3">Have a project in mind?</h3>
                            <p className='SEHero-form-p'>Let’s get to work. </p>
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

export default MAHero
