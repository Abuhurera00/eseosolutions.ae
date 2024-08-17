import React from 'react'
import "../Styles/Clientresult.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bike24 from "../assets/bike24.svg"
import casestudyimg11 from "../assets/casestudyimg11.png"
import mindticle from "../assets/mindticle.png"


const Clientresult = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };


  return (
    <section className='client-result'>
      <div className="result-container">
        <h2 className="result-h2">Our Clients Get Results</h2>
        <h3 className="result-h3">We work together across the globe</h3>
        <div className="result-carousal">
            <div className="result-carousal-width">
            <Slider {...settings}>
                <div className="result-item">
                    <div className="result-row g-0">
                        <div className="result-left">
                            <div className="result-img-holder">
                                <img src={bike24} alt="bike24" className='bike-24' />
                                <a href="#" className='Read-case-btn'>Read case study</a>
                            </div>
                            <p className="text-start">BIKES24 brings the best from the world of pre-owned bikes. They strive to offer superior, genuine, and reliable used bikes to make you happy and save money.</p>
                            <div className="c-r">
                                <span className="result-span">CLIENT RESULTS</span>
                                <div className="result-row mt-3">
                                    <div className="result-col px-xl-5">
                                        <span className='span-h2'>+<span className="counter">12</span>%</span>
                                        <small className='text-secondary'>Increase in website visitor</small>
                                    </div>
                                    <div className="result-col px-xl-5 border-start">
                                        <span className='span-h2'>+<span className="counter">15</span>%</span>
                                        <small className='text-secondary'>Increase in organic Search trafic</small>
                                    </div>
                                    <div className="result-col px-xl-5 border-start">
                                        <span className='span-h2'>+<span className="counter">20</span>%</span>
                                        <small className='text-secondary'>Increase in the Conversation rate</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="result-right">
                            <img src={casestudyimg11} alt={casestudyimg11} className="r-r-img" />
                        </div>
                    </div>
                </div>
                <div className="result-item">
                    <div className="result-row g-0">
                        <div className="result-left">
                            <div className="result-img-holder">
                                <img src={mindticle} alt="mindticle" className='bike-24' />
                                <a href="#" className='Read-case-btn'>Read case study</a>
                            </div>
                            <p className="text-start">Mindtickle customers are at the core of everything we do. Helping revenue organizations create as continuous state of excellence isn't possible without an incredible team. </p>
                            <div className="c-r">
                                <span className="result-span">CLIENT RESULTS</span>
                                <div className="result-row mt-3">
                                    <div className="result-col px-xl-5">
                                        <span className='span-h2'>+<span className="counter">31</span>%</span>
                                        <small className='text-secondary'>Increase in website visitor</small>
                                    </div>
                                    <div className="result-col px-xl-5 border-start">
                                        <span className='span-h2'>+<span className="counter">105</span>%</span>
                                        <small className='text-secondary'>Increase in organic Search trafic</small>
                                    </div>
                                    <div className="result-col px-xl-5 border-start">
                                        <span className='span-h2'>+<span className="counter">37</span>%</span>
                                        <small className='text-secondary'>Increase in the Conversation rate</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="result-right">
                            <img src={casestudyimg11} alt={casestudyimg11} className="r-r-img" />
                        </div>
                    </div>
                </div>
                </Slider>
            </div>
        </div>

        <div className="row-btn">
            <a href="#" className='outline-btn'>See All Case Study</a>
            <a href="#" className='secondary-btn'>Talk to our Experts</a>
        </div>
      </div>
    </section>
  )
}

export default Clientresult
