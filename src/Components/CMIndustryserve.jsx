import React from 'react'
import '../Styles/SEindustryserve.css'
import Grouph2269 from "../assets/Grouph2269.svg"
import Group2269 from "../assets/Group2269.svg"
import Group2273 from "../assets/Group2273.svg"
import Group2268 from "../assets/Group2268.svg"
import Group2271 from "../assets/Group2271.svg"
import Group2267 from "../assets/Group2267.svg"

const CMIndustryserve = () => {
  return (
    <section className='industries-sect CMIndustryserve-sect'>
    <div className="industries-cont">
    <h2 style={{textAlign: 'center'}}>Industries We Serve</h2>
    <p style={{textAlign: 'center'}}>All business is different and needs an appropriate solution.<br />
    We are dedicated to serving all industries with our efficient content writing services.</p>
        <div className="industries-row industries-text-center">


            {/* boxes */}
            <div className="SEindustries-box-col">
                <div className="SEindustries-box">
                    <div className="industries-box-img-holder">
                        <img src={Grouph2269} alt="Grouph2269" className='industries-img' />
                    </div>
                    <div className="industries-box-content CMIndustryserve-content">
                        <h3 className="SEindustry-h3">Education</h3>
                        <p className="industries-p">Get your education writing project done with professional content writers.</p>
                    </div>
                </div>
            </div>

            <div className="SEindustries-box-col">
                <div className="SEindustries-box">
                    <div className="industries-box-img-holder">
                        <img src={Group2269} alt="Group2269" className='industries-img' />
                    </div>
                    <div className="industries-box-content CMIndustryserve-content">
                        <h3 className="SEindustry-h3">Real Estate</h3>
                        <p className="industries-p">Make your real-estate business more solid with superior content writing services.</p>
                    </div>
                </div>
            </div>

            <div className="SEindustries-box-col">
                <div className="SEindustries-box">
                    <div className="industries-box-img-holder">
                        <img src={Group2273} alt="Group2273" className='industries-img' />
                    </div>
                    <div className="industries-box-content CMIndustryserve-content">
                        <h3 className="SEindustry-h3">eCommerce</h3>
                        <p className="industries-p">We offer engaging, lucrative, and intuitive content for eCommerce websites.</p>
                    </div>
                </div>
            </div>

            <div className="SEindustries-box-col">
                <div className="SEindustries-box">
                    <div className="industries-box-img-holder">
                        <img src={Group2268} alt="Group2268" className='industries-img' />
                    </div>
                    <div className="industries-box-content CMIndustryserve-content">
                        <h3 className="SEindustry-h3">Manufacturing</h3>
                        <p className="industries-p">Manufacturing industries can enhance their profits and deliver higher-value with our premium content.</p>
                    </div>
                </div>
            </div>

            <div className="SEindustries-box-col">
                <div className="SEindustries-box">
                    <div className="industries-box-img-holder">
                        <img src={Group2271} alt="Group2271" className='industries-img' />
                    </div>
                    <div className="industries-box-content CMIndustryserve-content">
                        <h3 className="SEindustry-h3">Government</h3>
                        <p className="industries-p">Leverage benefits of experienced content writers and lean process improvement.</p>
                    </div>
                </div>
            </div>

            <div className="SEindustries-box-col">
                <div className="SEindustries-box">
                    <div className="industries-box-img-holder">
                        <img src={Group2267} alt="Group2267" className='industries-img' />
                    </div>
                    <div className="industries-box-content CMIndustryserve-content">
                        <h3 className="SEindustry-h3">Healthcare</h3>
                        <p className="industries-p">Hire our expert writers to obtain premium content in the healthcare industry.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default CMIndustryserve
