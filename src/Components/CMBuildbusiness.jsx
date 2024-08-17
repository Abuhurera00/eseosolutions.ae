import React from 'react'
import '../Styles/CMBuildbusiness.css'
import cmGroup41599 from '../assets/cmGroup41599.png'
import cmGroup4160 from '../assets/cmGroup4160.png'
import cmGroup4161 from '../assets/cmGroup4161.png'
import cmGroup4162 from '../assets/cmGroup4162.png'

const CMBuildbusiness = () => {
    return (
        <section className='cmbuild-sect'>
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

            <div className="cmbuild-cont">
                <h2>Built for Your Business</h2>
                <p>Our flexible platform offers powerful tools and expert writers that enhance any business’ content process.</p>
                <div className="cmbuild-row cmbuild-center">
                    <div className="cmbuild-col">
                        <div className="cmbuild-inner-col">
                            <img src={cmGroup41599} alt="Group41599" className="cmbuild-img" />
                            <h3>Agencies</h3>
                            <p>Find writers with knowledge in the specific industries you need to produce compelling content for your varied client base.</p>
                        </div>
                    </div>

                    <div className="cmbuild-col">
                        <div className="cmbuild-inner-col">
                            <img src={cmGroup4160} alt="Group4160" className="cmbuild-img" />
                            <h3>eCommerce Companies</h3>
                            <p>Combine powerful tools for creating and managing product copy with skilled eCommerce writers to drive traffic and sales.</p>
                        </div>
                    </div>

                    <div className="cmbuild-col">
                        <div className="cmbuild-inner-col">
                            <img src={cmGroup4161} alt="Group4161" className="cmbuild-img" />
                            <h3>Publishers</h3>
                            <p>Build teams of knowledgeable writers and specify unique content formats for each of your properties – and then publish instantly to your sites.</p>
                        </div>
                    </div>

                    <div className="cmbuild-col">
                    <div className="cmbuild-inner-col">
                            <img src={cmGroup4162} alt="Group4162" className="cmbuild-img" />
                            <h3>Brands</h3>
                            <p>Partner with us to get publish-ready, on-brand content at any scale using our fully managed services.</p>
                        </div>
                    </div>
                </div>

                <div className="test-btn-cont cmbuild-btn-mt">
                    <a href="#" className="outline-btn whychoose-btn-cb">Request a Free Quote</a>
                    <a href="#" className="secondary1-btn">Talk to our Expert</a>
                </div>
            </div>
        </section>
    )
}

export default CMBuildbusiness
