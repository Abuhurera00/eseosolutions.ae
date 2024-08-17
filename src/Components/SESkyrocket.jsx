import React from 'react'
import '../Styles/SESkyrocket.css'
import seskyrockimg from '../assets/seskyrockimg.png'

const SESkyrocket = () => {
    return (
        <section className='skyrock-sect'>
            <div className="skyrock-cont">
                <div className="skyrock-row">
                    <div className="skyrock-left">
                        <h2>
                            PPC Management Company <br />That <span className="skyrock-span">Skyrocket The Businesses Growth </span>
                        </h2>
                        <p>PPC or pay-per-click is a surefire way to reach a wider customer base and push your company towards a higher revenue-earning business like never before. It enables you to show ads to that audience, who are already searching for your products or services. Are you ready to gain a leg up against your competitors? Let's outbid them with ESEO.
                        </p>
                        <p>ESEO is committed to delivering PPC campaigns crafted with cutting-edge strategies emphasizing alleviating the expenses and spiking the sales. You can check out our PPC services template and see how our Google advertising service drives more sales to your business, no matter if it is small or large.
                        </p>
                        <div className="know-d-flex">
                            <a href="#" className="outline-btn skyrock-btn-me">Request a Free Quote</a>
                            <a href="#" className="secondary1-btn">talk to our Expert</a>
                        </div>
                        </div>

                    <div className="skyrock-right">
                        <img src={seskyrockimg} alt="ppc" className="skyrock-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SESkyrocket
