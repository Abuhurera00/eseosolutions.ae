import React from 'react'
import '../Styles/SESkyrocket.css'
import mamaaccuratedata from '../assets/maaccuratedata.png'

const MAmobiledata = () => {
  return (
    <section className='skyrock-sect'>
            <div className="skyrock-cont">
                <div className="skyrock-row">
                    <div className="skyrock-left">
                        <h2>
                        Accurate Mobile Data Is <br />Key for App Store<br />Optimization
                        </h2>
                        <p>App Store Optimization (ASO) boosts keyword rankings and improves conversion for your app in the App Store and Google Play. Implementing ASO correctly can increase your organic downloads and dramatically reduce user acquisition cost.
                        </p>
                        <p>Gummicube’s industry-leading ASO technologies can help you understand how the Apple App Store and Google Play store operate better than any other mobile company. Our solutions drive growth with powerful insights, so you can focus on what matters.
                        </p>
                        </div>

                    <div className="skyrock-right">
                        <img src={mamaaccuratedata} alt="accuratedata" className="skyrock-img" />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default MAmobiledata
