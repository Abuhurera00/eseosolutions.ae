import React from 'react'
import '../Styles/SECore.css'
import secorefocus from '../assets/secorefocus.png'

const SECore = () => {
    return (
        <section className='core-sect'>
            <div className="core-cont">
                <div className="core-row">
                    <div className="core-top-col">
                        <p>Looking for a PPC specialist to boost your business revenue?</p>
                        <h2>Our Core Emphasis= Your Revenue</h2>
                        <p className="core-p">	Get profitable results from your PPC campaign with our customized business-based PPC campaign!!</p>
                    </div>
                </div>

                <div className="core-row core-align">
                    <div className="core-mid-left">
                        <div className="core-card" style={{borderLeft: '2px solid #1473E6'}}>
                            <h3 className="core-h3-color">Google Ads</h3>
                            <p>We create the Google Ads account for your business for running ads on your products and services. We help you drive sales on your offerings via a PPC ads campaign.</p>
                        </div>
                        <div className="core-card" style={{borderLeft: '2px solid #E20E4F'}} >
                        <h3 className="core-h3-color" style={{color: '#E20E4F'}}>Landing Page</h3>
                        <p>We craft and design the landing pages that trigger the traffic directly to that page, helping you make ample money. We also create social media content that ultimately assists in getting huge tr </p>
                        </div>
                        <div className="core-card" style={{borderLeft: '2px solid #FFBA00'}} >
                        <h3 className="core-h3-color" style={{color: '#FFBA00'}}>Social Ads</h3>
                        <p>We specialize in creating highly profitable social media campaigns that aid you in getting huge traffic. We believe in furnishing the premium quality of work.</p>
                        </div>
                    </div>

                    <div className="core-mid-right">
                        <img src={secorefocus} alt="focus" className="core-img" />
                    </div>
                </div>

                <div className="test-btn-cont guest-pt-4">
                    <a href="#" className="outline-btn">Request a Free Quote</a>
                    <a href="#" className="secondary1-btn">Talk to our Expert</a>
                </div>
            </div>
        </section>
    )
}

export default SECore
