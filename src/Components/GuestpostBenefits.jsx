import React from 'react'
import '../Styles/GuestpostBenefits.css'
import guestimprovesranking from '../assets/guestimprovesranking.svg'
import guestengineauthority from '../assets/guestengineauthority.svg'
import guestbrandguestbrandawareness from '../assets/guestbrandawareness.svg'
import guestqualitytraffic from '../assets/guestqualitytraffic.svg'
import guestlinkbuilding from '../assets/guestlinkbuilding.svg'
import guestcredibility from '../assets/guestcredibility.svg'

const GuestpostBenefits = () => {
    return (
        <section className='gpbenefits-sect'>
            <div className="gpbenefits-cont">
                <div className="gpbenefits-row">
                    <div className="gpbenefits-col">
                        <h2 className="gpbenefits-heading">Benefits of Guest Post Services</h2>
                        <p>Considering hiring a professional Guest Posting Services/Blogger Outreach Services? Check out the benefits below and make the final decision:</p>
                        <div className="gpbenefits-row gpbenefits-textstart">
                            <div className="gpbenefits-content">
                                <div className="gpbenefits-flex">
                                    <div className="gpbenefits-image-holder">
                                        <img src={guestimprovesranking} alt="improvesranking" className="gpbenefits-img" />
                                    </div>
                                    <div className="gpbenefits-words">
                                        <h3>Improves Your Ranking</h3>
                                        <p className='gpbenefits-p'>Guest posting services will help you secure links from various popular blogs </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gpbenefits-content">
                                <div className="gpbenefits-flex">
                                    <div className="gpbenefits-image-holder">
                                        <img src={guestengineauthority} alt="engineauthority" className="gpbenefits-img" />
                                    </div>
                                    <div className="gpbenefits-words">
                                        <h3>Domain & Search Engine Authority</h3>
                                        <p className='gpbenefits-p'>Blogger outreach services will help you build your domain name and search engine</p>
                                    </div>
                                </div>
                            </div>

                            <div className="gpbenefits-content">
                                <div className="gpbenefits-flex">
                                    <div className="gpbenefits-image-holder">
                                        <img src={guestbrandguestbrandawareness} alt="guestbrandawareness" className="gpbenefits-img" />
                                    </div>
                                    <div className="gpbenefits-words">
                                        <h3>Brand Awareness</h3>
                                        <p className='gpbenefits-p'>Guest blog posting services will provide wide exposure to your brand by having it mentioned</p>
                                    </div>
                                </div>
                            </div>

                            <div className="gpbenefits-content">
                                <div className="gpbenefits-flex">
                                    <div className="gpbenefits-image-holder">
                                        <img src={guestqualitytraffic} alt="qualitytraffic" className="gpbenefits-img" />
                                    </div>
                                    <div className="gpbenefits-words">
                                        <h3>Quality Traffic</h3>
                                        <p className='gpbenefits-p'>With guest blogging services, you can get relevant traffic on your website</p>
                                    </div>
                                </div>
                            </div>

                            <div className="gpbenefits-content">
                            <div className="gpbenefits-flex">
                                    <div className="gpbenefits-image-holder">
                                        <img src={guestlinkbuilding} alt="linkbuilding" className="gpbenefits-img" />
                                    </div>
                                    <div className="gpbenefits-words">
                                        <h3>Link Building</h3>
                                        <p className='gpbenefits-p'>Our Guest posting services help companies/agencies acquire backlinks through high quality link building</p>
                                    </div>
                                </div>
                            </div>

                            <div className="gpbenefits-content">
                            <div className="gpbenefits-flex">
                                    <div className="gpbenefits-image-holder">
                                        <img src={guestcredibility} alt="credibility" className="gpbenefits-img" />
                                    </div>
                                    <div className="gpbenefits-words">
                                        <h3>Credibility</h3>
                                        <p className='gpbenefits-p'>Consumers like to check the online presence and portrayal of your brand. Blogger outreach services help</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GuestpostBenefits
