import React from 'react'
import '../Styles/MAbenefitsofaso.css'
import maGroup4192 from '../assets/maGroup4192.png'
import maGroup4193 from '../assets/maGroup4193.png'
import maGroup4194 from '../assets/maGroup4194.png'
import maGroup4195 from '../assets/maGroup4195.png'
import maGroup4196 from '../assets/maGroup4196.png'

const MAbenefitsofaso = () => {
    return (
        <section className='aso-sect'>
            <div className="aso-cont">
                <h2 className="aso-text-center">Benefits of ASO</h2>
                <p className="aso-p aso-text-center">Here are the overall benefits of App Store Optimization</p>

                <div className="aso-row aso-pt">
                    <div className="aso-col">
                        <div className="aso-box aso-mb-3 aso-box-pt-md-5">
                            The users who have high retention rate and spend the most.
                        </div>
                        <span className="aso-span">Find the right users</span>
                        <div className="aso-icon  aso-icon-pt">
                            <img src={maGroup4192} alt="maGroup4192" className="aso-img" />
                        </div>
                    </div>

                    <div className="aso-col">
                        <div className="aso-box aso-box-order aso-order-3">
                            Get users to discover your app.
                        </div>
                        <span className="aso-span aso-order-2">Increase the visibility of your app</span>
                        <div className="aso-icon aso-icon-pb aso-order-1">
                            <img src={maGroup4193} alt="maGroup4193" className="aso-img" />
                        </div>
                    </div>

                    <div className="aso-col aso-mt-xl">
                        <div className="aso-box aso-mb-3 aso-box-pt-md-5">
                            The users who discover your app through the searches are most likely to download it.
                        </div>
                        <span className="aso-span">Boost Organic Downloads</span>
                        <div className="aso-icon  aso-icon-pt">
                            <img src={maGroup4194} alt="maGroup4194" className="aso-img" />
                        </div>
                    </div>

                    <div className="aso-col aso-mt-xl">
                        <div className="aso-box aso-box-order aso-order-3">
                            ASO is free and Successful totally depends on your effort.
                        </div>
                        <span className="aso-span aso-order-2">Acquire user in the most cost-efficient way</span>
                        <div className="aso-icon  aso-icon-pb aso-order-1">
                            <img src={maGroup4195} alt="maGroup4195" className="aso-img" />
                        </div>
                    </div>

                    <div className="aso-col aso-mt-xl">
                        <div className="aso-box aso-mb-3 aso-box-pt-md-5">
                            New Marketers are on the top of your fingers thanks to the localization strategies.
                        </div>
                        <span className="aso-span">Reach the users in the whole world</span>
                        <div className="aso-icon  aso-icon-pt">
                            <img src={maGroup4196} alt="maGroup4196" className="aso-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MAbenefitsofaso
