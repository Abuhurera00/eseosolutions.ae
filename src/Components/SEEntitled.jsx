import React from 'react'
import '../Styles/SEEntitled.css'
import seentitledoffer1 from '../assets/seentitledoffer1.png'
import seoffer2 from '../assets/seoffer2.png'
import sebox from '../assets/sebox.png'
import seoffer3 from '../assets/seoffer3.png'
import seoffer4 from '../assets/seoffer4.png'

const SEEntitled = () => {
    return (
        <section className='entitled-sect'>
            <div className="entitled-cont">
                <h2 className="entitled-h2">Benefits You are Entitled to Get With Us</h2>
                <p className="entitled-h2">Custom solutions are designed for every business because everyone can't deal with the same solution. The roadblocks and barriers are unique in every business. Let's take a look at how we have brought changes in the growth of businesses by clicking below.</p>
                <div className="entitled-row entitled-mt">
                    <div className="entitled-col">
                        <div className="entitled-row entitled-align">
                            <div className="entitled-box-col entitled-end">
                                <div className="entitled-box">
                                    <img src={seentitledoffer1} alt="offer1" className='entitled-img1' />
                                    <h3>A properly created semantic core</h3>
                                </div>
                                <div className="entitled-box">
                                    <img src={seoffer2} alt="offer2" className='entitled-img1' />
                                    <h3>High-level campaigns management</h3>
                                </div>
                            </div>

                            <div className="entitled-box-col">
                                <img src={sebox} alt="box" className='entitled-fluidimg' />
                            </div>

                            <div className="entitled-box-col">
                                <div className="entitled-box">
                                    <img src={seoffer3} alt="offer3" className='entitled-img2' />
                                    <h3>Our own life hacks, tips and tricks</h3>
                                </div>
                                <div className="entitled-box">
                                    <img src={seoffer4} alt="offer4" className='entitled-img2' />
                                    <h3>Most efficient approaches of creating campaigns</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SEEntitled
