import React from 'react'
import "../Styles/Knowmore.css";
import aboutpersoncard from "../assets/aboutpersoncard.svg"
import aboutcup from "../assets/aboutcup.svg"
import aboutmsg from "../assets/aboutmsg.svg"
import aboutrecycle from "../assets/aboutrecycle.svg"

const Knowmore = () => {
    return (
        <section className='konw-section'>
            <div className="know-container">
                <div className="know-row know-align-items">
                    <div className="know-left col-md-6">
                        <h2>Know More About Us</h2>
                        <p className="know-p">We ensure that your website gets valuble traffics that converts into leads</p>
                        <p>For many years, it has been an honour for us to add value to small and large organisations by giving efficient Digital help. Our dedicated team of professionals guarantees that effective tactics for boosting current businesses are implemented. Their areas of focus are as follows: They do more than just infusing keywords in SEO. They assist you in capturing the attention of search engines; SMM - Reach out to the Audience. Reputation Management - Creating a Positive Internet Presence; Connect, Interact, and Grow- They send out unique emails to interact with their clients and audiences. Content Marketing - They resolve challenges and implement solutions, using content that connects; Brand Identity - They produce effective and perfect designs for the bright success graph.</p>
                        <div className="know-d-flex">
                            <a href="#" className="outline-btn">talk to our Expert</a>
                            <a href="#" className="secondary1-btn">Free Website Audit</a>
                        </div>
                    </div>
                    <div className="know-right col-md-6">
                        <div className="know-row">
                            <div className="know-col pt-md-4">
                                <span className="know-card">
                                    <img src={aboutpersoncard} alt="aboutpersoncard" className="konw-img" />
                                    <h3 className='know-h3'>Our Team</h3>
                                    <p className="know-small">Meet our innovative, dedicated, and creative members of the ESEO family. </p>
                                    <a href="#" className="know-anchor">Know More<i className="fa-solid fa-arrow-right"></i></a>
                                </span>

                                <span className="know-card">
                                    <img src={aboutmsg} alt="aboutmsg" className="konw-img" />
                                    <h3 className='know-h3'>Client Reviews</h3>
                                    <p className="know-small">Check what our clients have to say about us</p>
                                    <a href="#" className="know-anchor">Know More<i className="fa-solid fa-arrow-right"></i></a>
                                </span>
                            </div>
                            <div className="know-col pt-md-5 mt-md-5">
                                <span className="know-card">
                                    <img src={aboutcup} alt="aboutcup" className="konw-img" />
                                    <h3 className='know-h3'>Awards & Recognitions</h3>
                                    <p className="know-small">Check our proud moments when we got publicly recognised for our impeccable efforts</p>
                                    <a href="#" className="know-anchor">Know More<i className="fa-solid fa-arrow-right"></i></a>
                                </span>

                                <span className="know-card">
                                    <img src={aboutrecycle} alt="aboutrecycle" className="konw-img" />
                                    <h3 className='know-h3'>Career</h3>
                                    <p className="know-small">Join us to hone your insight, imagination, and creativity</p>
                                    <a href="#" className="know-anchor">Know More<i className="fa-solid fa-arrow-right"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Knowmore
