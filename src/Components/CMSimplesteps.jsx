import React from 'react'
import '../Styles/CMSimplesteps.css'
import cm from '../assets/cm.png'

const CMSimplesteps = () => {
    return (
        <section className='simplesteps-sect'>
            <div className="wave improve-position">
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


            <div className="simplesteps-cont">
                <h2>3 Simple Steps to Your Success</h2>
                <p>At eSEO, we offer the best content development services dedicated to bringing new leads, attracting new customers, and generating more profits.</p>

                <div className="simplesteps-row simplesteps-align">
                    <div className="simplesteps-left">
                       <div className="simplesteps-dflex simplesteps-active">
                        <span className="simplesteps-span"></span>
                        <div>
                        <h4>Know your Target Audience</h4>
                        <small>We know your audience, so we create engaging content to bring them near you. </small>
                        </div>
                       </div>

                       <div className="simplesteps-dflex">
                        <span className="simplesteps-span"></span>
                        <div>
                        <h4>Develop your Content</h4>
                        <small>The content development starts as per the customers' interests and business domain.</small>
                        </div>
                       </div>

                       <div className="simplesteps-dflex">
                        <span className="simplesteps-span"></span>
                        <div>
                        <h4>Promote Your Content</h4>
                        <small>Promoting content is also an essential part as it improves business visibility. </small>
                        </div>
                       </div>
                    </div>

                    <div className="simplesteps-right">
                        <img src={cm} alt="cm" className="simplesteps-img" />
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

export default CMSimplesteps
