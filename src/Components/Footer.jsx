import React from 'react'
import "../Styles/Footer.css";
import footergooglead from "../assets/footergooglead.png"
import  footergoogleanalytics from "../assets/footergoogleanalytics.png"
import footergooglepartner from "../assets/footergooglepartner.png"
import footerHubSpotsm from "../assets/footerHubSpotsm.png"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-cont">
        <div className="footer-row">
            <div className="footer-col">
                <h5>Quick Links</h5>
                <ul className="footer-ul prime-ul">
                    <li className="mb-1"><a href="#">About Us</a></li>
                    <li className="mb-1"><a href="#">Contact Us</a></li>
                    <li className="mb-1"><a href="#">Privacy Policies</a></li>
                    <li className="mb-1"><a href="#">Terms and Conditions</a></li>
                </ul>
                <hr />
                <ul className="address-ul">
                    <li className="mb-1">
                        <b>INDIA Office:</b>
                        Unit No. 1017 A-I, JMD Megapolis, Sector 48, Gurugram, Haryana, 122001
                    </li>
                </ul>
            </div>
            <div className="footer-col">
            <h5>Services</h5>
                <ul className="footer-ul prime-ul">
                    <li className="mb-1"><a href="#">Search Engine Optimization</a></li>
                    <li className="mb-1"><a href="#">Guest Posting</a></li>
                </ul>
                <hr />
                <ul className="address-ul">
                    <li className="mb-1">
                        <b>UAE Office:</b>
                        Regal Tower - 502 Al <br /> Mustaqbal St - Business Bay -<br />Dubai, United Arab Emirates
                    </li>
                </ul>
            </div>
            <div className="footer-col">
            <h5>Quick Links</h5>
                <ul className="footer-ul prime-ul">
                    <li className="mb-1"><a href="#">About Us</a></li>
                </ul>
                <hr />
                <ul className="address-ul">
                    <li className="mb-1">
                        <b>USA Office:</b>
                        36 commerce Way, Woburn 4th floor, MA 01801-USA
                    </li>
                </ul>
            </div>
            <div className="footer-col">
            <h5>Quick Links</h5>
            <hr />
                <ul className="footer-ul min-height" style={{minHeight: '110px'}}>
                    <li className="mb-1">Phone: <a href="#">+971 0509806654</a></li>
                    <li className="mb-1">Email: <a href="#">info@eseosolutions.ae</a></li>
                </ul>
                <hr />
                <ul className="address-ul">
                    <li className="mb-1">
                        <b>Singapore Office:</b>
                        10 Anson Road #22-02, International Plaza, Singapore 079903
                    </li>
                </ul>
            </div>
            <div className="footer-image-center">
                <hr className="footer-last-divider" />
                <ul className="footer-ul">
                <li className="mb-1">
                    <img src={footergooglead} alt="footergooglead" />
                    <img src={footergoogleanalytics} alt="footergoogleanalytics" />
                    <img src={footergooglepartner} alt="footergooglepartner" />
                    <img src={footerHubSpotsm} alt="footerHubSpotsm" />
                </li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
