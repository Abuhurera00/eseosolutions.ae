import React from 'react'
import "../Styles/Globalbrands.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import entermissiondubailogo from "../assets/entermissiondubailogo.png"
import lenskart from "../assets/lenskart.png"
import makemytrip from "../assets/makemytrip.png"
import mfixlogo from "../assets/mfixlogo.png"
import cars24 from "../assets/cars24.png"
import danubeproperties from "../assets/danubeproperties.png"
import GFLogo from "../assets/GFLogo.png"
import jhrlogo from "../assets/jhrlogo.png"
import raymond from "../assets/raymond.png"
import SRColorFullHorizontal from "../assets/SRColorFullHorizontal.png"
import tasc from "../assets/tasc.png"
import museumofthefuture from "../assets/museumofthefuture.png"

const CareerGlobalbrands = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    const brands = [
        { src: entermissiondubailogo, alt: "entermissiondubailogo" },
        { src: lenskart, alt: "lenskart" },
        { src: makemytrip, alt: "makemytrip" },
        { src: mfixlogo, alt: "mfixlogo" },
        { src: cars24, alt: "cars24" },
        { src: danubeproperties, alt: "danubeproperties" },
        { src: GFLogo, alt: "GFLogo" },
        { src: jhrlogo, alt: "jhrlogo" },
        { src: raymond, alt: "raymond" },
        { src: SRColorFullHorizontal, alt: "SRColorFullHorizontal" },
        { src: tasc, alt: "tasc" },
        { src: museumofthefuture, alt: "museumofthefuture" }
    ];

    return (
        <div className='global-brand'>
            <h1 className="global-brand-heading" style={{fontSize: '1.5rem', fontWeight: '500', opacity: '.75', fontFamily: 'Poppins, sans-serif'}}>Trusted By Over 500+ Companies Worldwide</h1>
            <div className="global-brand-container">
                <Slider {...settings}>
                    {brands.map((brand, index) => (
                        <div key={index} className="global-image">
                            <img src={brand.src} alt={brand.alt} className="global-img" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default CareerGlobalbrands
