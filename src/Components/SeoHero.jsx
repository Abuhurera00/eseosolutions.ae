import React from 'react'
import "../Styles/SeoHero.css";
import "../Styles/Hero.css";

const SeoHero = () => {
    return (
        <section className="seohero-sect">
            <div className="seohero-cont">
                <div className="seohero-row seohero-align-items">
                    <div className="seohero-left">
                        <h1 className='seohero-h1'>
                            Search Engine Optimization Services in Dubai that Grow Traffic and Increase Revenue
                        </h1>
                        <p className='seohero-p'>Boost organic rankings and traffic <br />
                            with proven SEO strategies</p>
                        <div className="know-d-flex seohero-d-none seohero-d-md-block">
                            <a href="#" className="outline-btn">talk to our Expert</a>
                            <a href="#" className="secondary1-btn">Free Website Audit</a>
                        </div>
                    </div>


                    <div className="seohero-right">
                        <div className="seohero-form">
                            <h3 className="text-white-h3">Get A Free SEO Audit</h3>
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

export default SeoHero
