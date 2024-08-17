import React from 'react'
import '../Styles/CMCreate.css'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import g3 from '../assets/g3.jpg'
import g4 from '../assets/g4.jpg'
import g5 from '../assets/g5.jpg'

const CMCreate = () => {
    return (
        <section className='cmcreate-sect'>
            <div className="cmcreate-cont">
                <div className="cmcreate-row">
                    <div className="cmcreate-top-col">
                        <h2><span className="cmcreate-theme-color">Create</span>  Any Content</h2>
                        <p>Being a renowned content development service provider, we are committed to creating high-engaging, unique, and error-free content. We ensure higher conversion rates and increase leads.</p>
                    </div>
                </div>

                <div className="cmcreate-row cmcreate-mt">
                    <div className="cmcreate-mid-col">
                        <div className="cmcreate-row">
                            <div className="cmcreate-card cmcreate-px">
                                <img src={g1} alt="g1" className="cmcreate-img" />
                            </div>

                            <div className="cmcreate-card cmcreate-flex">
                                <div>
                                    <h4 className="cmcreate-theme-color">Article Writing</h4>
                                    <p>Our strong expertise in writing SEO-friendly, well-researched, effective, and dedicated articles. We help you promote your business with our superior article writing service.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cmcreate-mid-col">
                        <div className="cmcreate-row">
                            <div className="cmcreate-card cmcreate-px">
                                <img src={g2} alt="g2" className="cmcreate-img" />
                            </div>

                            <div className="cmcreate-card cmcreate-flex">
                                <div>
                                    <h4 className="cmcreate-theme-color">Blog Writing</h4>
                                    <p>Looking for raising brand equity or engaging users through blog writing. We are here to assist you with our efficient blog content that gives your repeat users.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cmcreate-mid-col">
                        <div className="cmcreate-row">
                            <div className="cmcreate-card cmcreate-px cmcreate-order-2">
                                <img src={g3} alt="g3" className="cmcreate-img" />
                            </div>

                            <div className="cmcreate-card cmcreate-flex">
                                <div>
                                    <h4 className="cmcreate-theme-color">SEO Content Writing</h4>
                                    <p>Expert content writers at eSEO are aware of all SEO standards. We plan, strategize, and create SEO-friendly content to boost your business's value and visibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cmcreate-mid-col">
                        <div className="cmcreate-row">
                            <div className="cmcreate-card cmcreate-px cmcreate-order-2">
                                <img src={g4} alt="g4" className="cmcreate-img" />
                            </div>

                            <div className="cmcreate-card cmcreate-flex">
                                <div>
                                    <h4 className="cmcreate-theme-color">Content Editing</h4>
                                    <p>So you have the raw content, draft, or maybe just a book? Want to improve its readability? Our content editing service extends beyond just picking out brevity and grammatical errors.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cmcreate-mid-col">
                        <div className="cmcreate-row">
                            <div className="cmcreate-card cmcreate-px">
                                <img src={g1} alt="g1" className="cmcreate-img" />
                            </div>

                            <div className="cmcreate-card cmcreate-flex">
                                <div>
                                    <h4 className="cmcreate-theme-color">Press Releases</h4>
                                    <p>A well-written press release is about notifying something new to the media and followers. We write a perfect copy of press release contents that gives your business exposure and increase its credibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cmcreate-mid-col">
                    <div className="cmcreate-row">
                            <div className="cmcreate-card cmcreate-px">
                                <img src={g5} alt="g5" className="cmcreate-img" />
                            </div>

                            <div className="cmcreate-card cmcreate-flex">
                                <div>
                                    <h4 className="cmcreate-theme-color">Social Media Writing</h4>
                                    <p>Don't know how to write perfect content for social media channels? Don't worry! Our social media content writers' team will create high-end and intuitive content to share on social channels.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="test-btn-cont cmcreate-pt-4">
                    <a href="#" className="outline-btn">Request a Free Quote</a>
                    <a href="#" className="secondary1-btn">Talk to our Expert</a>
                </div>
            </div>
        </section>
    )
}

export default CMCreate
