import React from 'react'
import "../Styles/Partner.css";
import "../Styles/Improvesearch.css";
import "../Styles/Clientresult.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import googlepartner from "../assets/googlepartner.svg"
import BingAdsAccreditedProfessional from "../assets/BingAdsAccreditedProfessional.svg"
import googleanalyticsar21 from "../assets/googleanalyticsar21.svg"
import HubSpotsm from "../assets/HubSpotsm.svg"
import facebookblueprint from "../assets/facebookblueprint.svg"

const Partner = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          autoplay: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true
        }
      }
    ]
  };


  return (
    <section className='partner-section'>
      {/* <div className="span-partner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}

      <div className="wave improve-position">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="partner-cont">
        <h2>Associate Partners</h2>
        <div className="partner-carousal">
          <div className="partner-row">
            <Slider {...settings}>
              <div className="partner-item">
                <div className="partner-margins">
                  <img src={googlepartner} alt="" className="partner-img" />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-margins">
                  <img src={BingAdsAccreditedProfessional} alt="" className="partner-img" />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-margins">
                  <img src={googleanalyticsar21} alt="" className="partner-img" />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-margins">
                  <img src={googlepartner} alt="" className="partner-img" />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-margins">
                  <img src={HubSpotsm} alt="" className="partner-img" />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-margins">
                  <img src={facebookblueprint} alt="" className="partner-img" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partner
