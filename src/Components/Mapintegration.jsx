import React from 'react'
import "../Styles/Mapintegration.css";

const Mapintegration = () => {
    return (
        <section className='integration-sect'>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0412518760418!2d77.03674237415905!3d28.41801209379242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb664a016f803%3A0x5d40b299eaf0a259!2sE%20SEO%20Solutions%20Private%20Limited!5e0!3m2!1sen!2s!4v1718430076493!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="integration-cont">
                <div className="integration-row">
                    <div className="integration-center">
                        <div className="submit-form">
                            <h3>Get in Touch</h3>
                            <div className="empty-submit"></div>

                            <form action="" className="footer-form">
                                <div className="mb-4">
                                    <input required="" type="text" className="form-control border-0 fw-400" name="name" id="fname" aria-describedby="emailHelp" placeholder="Your Name*" />
                                </div>
                                <div className="mb-4">
                                    <input required="" type="text" className="form-control border-0 fw-400" name="email" id="femail" aria-describedby="emailHelp" placeholder="Your Email Address*" />
                                </div>
                                <div className="mb-4">
                                    <input required="" type="text" className="form-control border-0 fw-400" name="phone" id="fphone" aria-describedby="emailHelp" placeholder="Phone Number*" />
                                </div>
                                <div className="mb-4">
                                    <input required="" type="text" className="form-control border-0 fw-400" name="URL" id="fURl" aria-describedby="emailHelp" placeholder="Website URL*" />
                                </div>
                                <div className="mb-4">
                                    <input required="" type="text" className="form-control border-0 fw-400" name="company" id="fcompany" aria-describedby="emailHelp" placeholder="Company Name*" />
                                </div>

                                <div className="form-btn">Submit</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mapintegration
