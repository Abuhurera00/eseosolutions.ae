import React from 'react'
import '../Styles/SESkyrocket.css'
import smo from '../assets/smo.png'

const SMbrandpromotion = () => {
  return (
    <section className='skyrock-sect'>
            <div className="skyrock-cont">
                <div className="skyrock-row">
                    <div className="skyrock-left">
                        <h2>
                        Tap The Power of Social Media
                         <br />For Streamlining <span className="skyrock-span">Brand Promotion</span>
                        </h2>
                        <p>Social media optimization services help businesses to build trust online among their users. e-SEO Technologies offers the best quality SMO services for small to large size businesses for the past few years and we have a record of helping clients in building better social media trust for their brand. We understand that every business is not the same so we have a customized social media optimization strategies for every type of business to provide them with the desired success they are looking for.
                        </p>
                        <div className="know-d-flex">
                            <a href="#" className="outline-btn skyrock-btn-me">Request a Free Quote</a>
                            <a href="#" className="secondary1-btn">talk to our Expert</a>
                        </div>
                        </div>

                    <div className="skyrock-right skyrock-right-pt">
                        <img src={smo} alt="smo" className="skyrock-img" />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default SMbrandpromotion
