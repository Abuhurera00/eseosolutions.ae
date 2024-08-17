import React from 'react'
import '../Styles/CareerMegaSect.css'
import career3 from '../assets/career3.jpg'

const CareerMegaSect = () => {
    return (
        <section className='carmega-sect'>
            <div className="carmega-cont">
                <h2 className="carmega-h2">Careers</h2>
                <p className="carmega-p">eSEO is looking for talented and skillful professionals from Digital Marketing to be a part of a reputed Marketing  company that has<br />delivered more than 1000+ projects.</p>

                <div className="carmega-row carmega-job-grid">
                    <div className="carmega-grid-heading"><h3 className="carmega-h3">Job Vacancies</h3></div>
                    <div className="carmega-col">
                        <div className="carmega-card">
                            <div className="carmega-badge-cont"><span className="carmega-badge">Gurgaon, India</span></div>
                            <h3 className="carmega-with-ease">Job description of Google Ads</h3>
                            <p className="carmega-with-ease">Min 3 Years to 6 years experience in handling Ads campaigns </p>
                            <a href="#" className="carmega-btn carmega-bottom">Discover More</a>
                        </div>
                    </div>

                    <div className="carmega-col">
                        <div className="carmega-card">
                            <div className="carmega-badge-cont"><span className="carmega-badge">Gurgaon, India</span></div>
                            <h3 className="carmega-with-ease">Job Description of WordPress</h3>
                            <p className="carmega-with-ease">Minimum 2-5 years of experience in Word Press Development  </p>
                            <a href="#" className="carmega-btn">Discover More</a>
                        </div>
                    </div>

                    <div className="carmega-col">
                        <div className="carmega-card">
                            <div className="carmega-badge-cont"><span className="carmega-badge">Gurgaon, India</span></div>
                            <h3 className="carmega-with-ease">Job Description of SEO Team Leader</h3>
                            <p className="carmega-with-ease">Define requirements, tasks, and resources associated to SEO strategy </p>
                            <a href="#" className="carmega-btn">Discover More</a>
                        </div>
                    </div>

                    <div className="carmega-col">
                        <div className="carmega-card">
                            <div className="carmega-badge-cont"><span className="carmega-badge">Gurgaon, India</span></div>
                            <h3 className="carmega-with-ease">Job Description of SMO</h3>
                            <p className="carmega-with-ease">2 to 5 years of agency experience in handling social media for brands </p>
                            <a href="#" className="carmega-btn">Discover More</a>
                        </div>
                    </div>

                    <div className="carmega-col">
                        <div className="carmega-card">
                            <div className="carmega-badge-cont"><span className="carmega-badge">Gurgaon, India</span></div>
                            <h3 className="carmega-with-ease">Job Description of SEO Manager</h3>
                            <p className="carmega-with-ease">4 - 6 years experience in Search Engine Optimization (SEO) </p>
                            <a href="#" className="carmega-btn">Discover More</a>
                        </div>
                    </div>

                    <div className="carmega-col">
                    <div className="carmega-card">
                            <div className="carmega-badge-cont"><span className="carmega-badge">Gurgaon, India</span></div>
                            <h3 className="carmega-with-ease">Job Description of Guest Blogger</h3>
                            <p className="carmega-with-ease">1 - 2 years experience in Guest Posting (Guest Blogger) </p>
                            <a href="#" className="carmega-btn">Discover More</a>
                        </div>
                    </div>

                    <div className="carmega-col">
                    <div className="carmega-card">
                            <div className="carmega-badge-cont"><span className="carmega-badge">Gurgaon, India</span></div>
                            <h3 className="carmega-with-ease">Job description of SEO</h3>
                            <p className="carmega-with-ease">1 - 2 years experience in Search Engine Optimization (SEO) </p>
                            <a href="#" className="carmega-btn">Discover More</a>
                        </div>
                    </div>

                    <div className="carmega-col">
                    <div className="carmega-card">
                            <div className="carmega-badge-cont"><span className="carmega-badge">Gurgaon, India</span></div>
                            <h3 className="carmega-with-ease">Job Description of Graphic Designer</h3>
                            <p className="carmega-with-ease">Minimum 3 years of experience as a graphic designer </p>
                            <a href="#" className="carmega-btn">Discover More</a>
                        </div>
                    </div>

                    <div className="carmega-col">
                    <div className="carmega-card">
                            <div className="carmega-badge-cont"><span className="carmega-badge">Gurgaon, India</span></div>
                            <h3 className="carmega-with-ease">Job Description of Content Head</h3>
                            <p className="carmega-with-ease">3-4 years agency experience or in a similar role  </p>
                            <a href="#" className="carmega-btn">Discover More</a>
                        </div>
                    </div>
                </div>


                <div className="carmega-row carmega-align">
                    <div className="carmega-left">
                        <img src={career3} alt="career3" className="carmega-img" />
                    </div>

                    <div className="carmega-right">
                    <h2 className="carmega-right-heading">Join More Than 100 Satisfied Employees</h2>
                    <p className="carmega-right-p">Our approach to SEO uniquely built around what SEO uniquely we works and what we know doesn’t work.</p>
                    <p className="carmega-right-p2">Search Engine Optimization Search Engine Optimization.</p>
                    <a href="#" className="carmega-right-btn">Get Started</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CareerMegaSect
