import React from 'react'
import "../Styles/Hero.css";
import "../Styles/SeoHero.css";
import "../Styles/Guestpostinghero.css";

const Guestpostinghero = () => {
    return (
        <section className="seohero-sect">
            <div className="seohero-cont">
                <div className="seohero-row seohero-align-items">
                    <div className="seohero-left">
                        <h1 className='seohero-h1'>
                        High Quality
                        Guest Posting Services
                        </h1>
                        <p className='seohero-p'>Get Awesome, In-Content White Hat Links Through Manual Blogger Outreach – Done For You!</p>
                        <div className="seohero-row">
                            <div className="guesthero-col guest-col-xl-5">
                                <ul className="list-unstyled lh-lg gusethero-mb-0">
                                    <li>
                                        <i className="fa-solid fa-check seo-me-2"></i>
                                        U.S. and Canadian writers
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check seo-me-2"></i>
                                        Predictable turnaround
                                    </li>
                                </ul>
                            </div>
                            <div className="guesthero-col">
                                <ul className="list-unstyled lh-lg">
                                    <li>
                                        <i className="fa-solid fa-check seo-me-2"></i>
                                        Approve domains before placement
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check seo-me-2"></i>
                                        U.S. and Canadian writers
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="seohero-right">
                        <div className="seohero-form">
                            <h3 className="text-white-h3">Have a project in mind?</h3>
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

export default Guestpostinghero
