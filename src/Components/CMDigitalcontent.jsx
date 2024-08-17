import React from 'react'
import '../Styles/CMDigitalcontent.css'
import urbandoinghomework from '../assets/urbandoinghomework.png'
import urban851 from '../assets/urban851.png'
import urban931 from '../assets/urban931.png'

const CMDigitalcontent = () => {
    return (
        <section className='digitalcontent-sect'>
            <div className="digitalcontent-cont">
                <div className="digitalcontent-row">
                    <div className="digitalcontent-col">
                        <h2>Digital Content that Delivers Results</h2>
                        <p>A well-written content enables businesses to come closer to their target customers. We offer reliable and expert content development services to boost your business.</p>
                        <div className="digitalcontent-row digitalcontent-mt">
                            <div className="digitalcontent-card">
                                <div className="digitalcontent-card-p">
                                    <img src={urbandoinghomework} alt="urbandoinghomework" className="digitalcontent-img" />
                                    <h4>Top Website Content Writers</h4>
                                    <p>Our well-crafted website content copies focus on making your brand stand out.</p>
                                </div>
                            </div>
                            <div className="digitalcontent-card">
                                <div className="digitalcontent-card-p">
                                    <img src={urban851} alt="urban851" className="digitalcontent-img" />
                                    <h4>Connect with Your Audience</h4>
                                    <p>Our writers prioritize interest areas and pain points for your target audience before creating web content.</p>
                                </div>
                            </div>
                            <div className="digitalcontent-card">
                            <div className="digitalcontent-card-p">
                                    <img src={urban931} alt="urban931" className="digitalcontent-img" />
                                    <h4>Rank higher on Google</h4>
                                    <p>Expert content writers ensure steady traffic to your website with demonstrated SEO techniques and high-quality content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CMDigitalcontent
