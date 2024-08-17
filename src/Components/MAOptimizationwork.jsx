import React from 'react'
import '../Styles/MAOptimizationwork.css'
import approachGroup2170 from '../assets/approachGroup2170.svg'
import approachGroup2175 from '../assets/approachGroup2175.svg'
import approachGroup2174 from '../assets/approachGroup2174.svg'
import approachPath5410 from '../assets/approachPath5410.svg'

const MAOptimizationwork = () => {
    return (
        <section className='opti-sect'>
            <div className="opti-pb">
                <div className="opti-container opti-center opti-pm-b">
                    <h2>How does App Store Optimization Work?</h2>
                    <p>In today’s high-tech world, people are experts enough and they know how tosearch for the specific things on the Internet using their mobile devices. When searching for an app in an app store, anaverage user takes 3-6 seconds to decide whether they want to download that app or not. If your app comes out at the top of the search results and has eye-catching visuals, great title and easy to understand description, then you can get them to download it. If your app is optimized by a professional ASO company like us, here is how you can benefit:
                    </p>
                </div>
            </div>
            <div className="opti-container opti-center" style={{marginTop: '-50px'}}>
                <div className="opti-row opti-xlp">
                    <div className="opti-img-cont opti-active">
                        <span className="opti-span">
                         <img src={approachGroup2170} alt="approachGroup2170" className='opti-img' />
                        </span>
                        <h4 className="opti-theme-color">Discoverability</h4>
                        <p>Make your app discoverable in app stores</p>
                    </div>

                    <div className="opti-img-cont">
                    <span className="opti-span">
                         <img src={approachGroup2175} alt="approachGroup2175" className='opti-img' />
                        </span>
                        <h4 className="opti-theme-color">Conversions</h4>
                        <p>Increase visibility to drive conversion rates</p>
                    </div>

                    <div className="opti-img-cont">
                    <span className="opti-span">
                         <img src={approachGroup2174} alt="approachGroup2174" className='opti-img' />
                        </span>
                        <h4 className="opti-theme-color">Downloads</h4>
                        <p>Get more organic downloads with top ranking</p>
                    </div>

                    <div className="opti-img-cont">
                    <span className="opti-span">
                         <img src={approachPath5410} alt="approachPath5410" className='opti-img' />
                        </span>
                        <h4 className="opti-theme-color">Discoverability</h4>
                        <p>Enhance acquisition results at a low cost</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MAOptimizationwork
