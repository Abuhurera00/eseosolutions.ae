import React from 'react'
import "../Styles/Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewavtar323 from "../assets/reviewavtar323.svg"
import makemytrip from "../assets/makemytrip.png"
import pixel from "../assets/pixel.png"
import uLTIMATEGREENS4copy from "../assets/uLTIMATEGREENS4copy.png"
import torque from "../assets/torque.png"
import travelkhana from "../assets/travelkhana.png"
import dogspot from "../assets/dogspot.png"

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // vertical: true, 
        appendDots: dots => <ul>{dots}</ul>,
       responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            vertical: false,
          }
        }
    ]
};


  return (
    <section className='testimonials-sect'>
      <div className="testimonials-container">
        <div className="testimonials-row">

        <div className="testimonials-heading">
            <h2>Reviews From Our Customers</h2>
        </div>

        <div className="testimonial">
        <Slider {...settings}>
       <div className="testimonials-item">
        <div className="test-box">
            <div className="testimonials-row g-0">
                <div className="testimonial">
                    <p>One of the most promising SEO company. They matched our business objectives in terms of their services and core competencies which resulted in boost for our business.The founders Deepak Nagpal and Sumit Nagpal are also very professional and you can see the attention to detail they give to your company and online marketing strategy, mainly seo and adwords. Recommended to all.</p>
                    <div className="testimonials-flex">
                        <div className="testimonial-img-holder">
                            <img src={reviewavtar323} alt="reviewavtar323" />
                        </div>
                        <div className="testimonials-row review-bot">
                           <div className="name-headingetc">
                            <div className="flex-grow-1">
                                <span className='review-name'>Manish Sharma</span>
                                <small className='review-prof'>Assoicate Director - Digital  I  Makemytrip</small>
                            </div>
                           </div>

                           <div className="review-img">
                            <img src={makemytrip} alt="makemytrip" />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className="testimonials-item">
        <div className="test-box">
            <div className="testimonials-row g-0">
                <div className="testimonial">
                    <p>ESEO team is highly professional and knowledgeable. Got great results with their strategic seo efforts...Highly Recommended!</p>
                    <div className="testimonials-flex">
                        <div className="testimonial-img-holder">
                            <img src={reviewavtar323} alt="reviewavtar323" />
                        </div>
                        <div className="testimonials-row review-bot">
                           <div className="name-headingetc">
                            <div className="flex-grow-1">
                                <span className='review-name'>Pixel Photography</span>
                                <small className='review-prof'>Founder  I  Pixel Photography</small>
                            </div>
                           </div>

                           <div className="review-img">
                            <img src={pixel} alt="pixel" />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className="testimonials-item">
        <div className="test-box">
            <div className="testimonials-row g-0">
                <div className="testimonial">
                    <p>They are highly professional with their services.</p>
                    <div className="testimonials-flex">
                        <div className="testimonial-img-holder">
                            <img src={reviewavtar323} alt="reviewavtar323" />
                        </div>
                        <div className="testimonials-row review-bot">
                           <div className="name-headingetc">
                            <div className="flex-grow-1">
                                <span className='review-name'>Unlimited Greens</span>
                                <small className='review-prof'>Founder  I  Unlimited Greens</small>
                            </div>
                           </div>

                           <div className="review-img">
                            <img src={uLTIMATEGREENS4copy} alt="uLTIMATEGREENS4copy" />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className="testimonials-item">
        <div className="test-box">
            <div className="testimonials-row g-0">
                <div className="testimonial">
                    <p>We have been associated with Mr Deepak Nagpal Managing Director E SEO Solutions Private Limited and his team from last few years.He has provide us complete support on Web Site Development , SEO , Social Media Management . Mr. Deepak Nagpal is technically very strong with his knowledge in this domain and his guidance has been very valuable to us. Also the staff is quite responsive.Thank you so much Team E SEO Solutions</p>
                    <div className="testimonials-flex">
                        <div className="testimonial-img-holder">
                            <img src={reviewavtar323} alt="reviewavtar323" />
                        </div>
                        <div className="testimonials-row review-bot">
                           <div className="name-headingetc">
                            <div className="flex-grow-1">
                                <span className='review-name'>Abhay Singh Bedi</span>
                                <small className='review-prof'>Director  I  Torque Pharma </small>
                            </div>
                           </div>

                           <div className="review-img">
                            <img src={torque} alt="torque" />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className="testimonials-item">
        <div className="test-box">
            <div className="testimonials-row g-0">
                <div className="testimonial">
                    <p>Innovative and Result driven company. Recommended to All</p>
                    <div className="testimonials-flex">
                        <div className="testimonial-img-holder">
                            <img src={reviewavtar323} alt="reviewavtar323" />
                        </div>
                        <div className="testimonials-row review-bot">
                           <div className="name-headingetc">
                            <div className="flex-grow-1">
                                <span className='review-name'>Deepak Srivastva</span>
                                <small className='review-prof'>Marketing Manager  I  TravelKhana</small>
                            </div>
                           </div>

                           <div className="review-img">
                            <img src={travelkhana} alt="makemytrip" />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className="testimonials-item">
        <div className="test-box">
            <div className="testimonials-row g-0">
                <div className="testimonial">
                    <p>Happy with their service :)</p>
                    <div className="testimonials-flex">
                        <div className="testimonial-img-holder">
                            <img src={reviewavtar323} alt="reviewavtar323" />
                        </div>
                        <div className="testimonials-row review-bot">
                           <div className="name-headingetc">
                            <div className="flex-grow-1">
                                <span className='review-name'>Shalesh Singh</span>
                                <small className='review-prof'>Director  I  Dogspot.in</small>
                            </div>
                           </div>

                           <div className="review-img">
                            <img src={dogspot} alt="makemytrip" />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       </Slider>
        </div>

        </div>

        <div className="test-btn-cont">
            <a href="#" className="outline-btn">See All Testimonials</a>
            <a href="#" className="secondary1-btn">Review On Google</a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
