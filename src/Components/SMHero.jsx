import React from 'react'

const SMHero = () => {
    return (
        <section className="SEHero-sect">
            <div className="seohero-cont">
                <div className="seohero-row seohero-align-items">
                    <div className="seohero-left">
                        <h1 className='SEHero-h1'>
                        Building Brands Identity With The Best SMO Services
                        </h1>
                        <p className='SEHero-p'>SMO services have become important for every business to promote their business over the internet and attract potential customers for their business from Social Media</p>
                        <div className="seohero-row">
                        <div className="guesthero-col guest-col-xl-5">
                                <ul className="list-unstyled lh-lg gusethero-mb-0">
                                    <li>
                                        <i className="fa-solid fa-check seo-me-2"></i>
                                        Brand Monitoring
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check seo-me-2"></i>
                                        Social Media Management
                                    </li>
                                </ul>
                            </div>
                            <div className="guesthero-col">
                                <ul className="list-unstyled lh-lg">
                                    <li>
                                        <i className="fa-solid fa-check seo-me-2"></i>
                                        Setup & Custom Profile Design
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check seo-me-2"></i>
                                        Social Media Contests
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

export default SMHero
