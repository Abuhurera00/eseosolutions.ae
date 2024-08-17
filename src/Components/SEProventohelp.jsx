import React from 'react'
import '../Styles/SEProvenhelp.css'

const SEProventohelp = () => {
    return (
        <section className='proven-sect'>
            <div className="proven-cont">
                <h2>Proven to Help</h2>
                <p>Take a look at some of the successful lead gen campaigns we have had in partnering with our clients.<br />we've helped businesses in your industry by clicking below.</p>
                <div className="proven-row">
                    <div className="proven-col">
                        <div className="proven-row proven-mpt">
                            <div className="proven-top-box">
                                <div className="proven-box-btn-cont">
                                    <button type="button" className="proven-box-btn proven-rounded-start">Before working with ESEO</button>
                                    <button type="button" className="proven-box-btn proven-rounded-end proven-active">working with ESEO</button>
                                </div>
                            </div>

                            <div className="proven-box">
                                <h4 className="proven-box-h4">Cost Per Lead</h4>
                                <div className="proven-box-btn-cont">
                                    <button type="button" className="proven-box-btn proven-rounded-start">$618</button>
                                    <button type="button" className="proven-box-btn proven-rounded-end proven-active">$310</button>
                                </div>
                            </div>

                            <div className="proven-box">
                                <h4 className="proven-box-h4">Return on Investment</h4>
                                <div className="proven-box-btn-cont">
                                    <button type="button" className="proven-box-btn proven-rounded-start">500%</button>
                                    <button type="button" className="proven-box-btn proven-rounded-end proven-active">852%</button>
                                </div>
                            </div>

                            <div className="proven-box">
                                <h4 className="proven-box-h4">Conversion Rate</h4>
                                <div className="proven-box-btn-cont">
                                    <button type="button" className="proven-box-btn proven-rounded-start">2.79%</button>
                                    <button type="button" className="proven-box-btn proven-rounded-end proven-active">5.9%</button>
                                </div>
                            </div>

                            <div className="proven-box">
                                <h4 className="proven-box-h4">Cost per Click</h4>
                                <div className="proven-box-btn-cont">
                                    <button type="button" className="proven-box-btn proven-rounded-start">$30</button>
                                    <button type="button" className="proven-box-btn proven-rounded-end proven-active">$16</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SEProventohelp
