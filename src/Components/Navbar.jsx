


import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../assets/logo.svg";
import dubai from "../assets/dubai.jpg";
import menuSearchEngineMarketing from "../assets/menuSearchEngineMarketing.svg";
import menuSocialMediaMarketing from "../assets/menuSocialMediaMarketing.svg";
import menuMobileAppMarketing from "../assets/menuMobileAppMarketing.svg";
import menuContentMarketing from "../assets/menuContentMarketing.svg";


function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const handleDropdownClick = () => {
        if (window.innerWidth <= 1024) {
            setMobileDropdownOpen(!isMobileDropdownOpen);
        }
    };

    return (
        <div className="sticky">
          <marquee direction="scroll">Notice - Please be aware of any fraud Calls/SMS/Whatsapp Messages for Offering Jobs / Requesting Payments / Work From Home Jobs . Please Do Not Attempt Any Transactions to Such Messages or disclose any personal information to individuals claiming to be ESEO Solutions Employees</marquee>


            <div className="top-nav">
                <div className="left">
                    <a href="#">
                        <i className="fa-regular fa-envelope"></i>
                        <span className="email">info@eseosolutions.ae</span>
                    </a>
                </div>
                <div className="right">
                    <a href="#" className="skype-mail">
                        <i className="fa-brands fa-skype"></i>
                        <span className="skype">er.deepaknagpal1</span>
                    </a>
                    <a href="#" className="phone">
                        <img src={dubai} alt="dubai" className="dubai" /><p>+971 0509806654</p>
                    </a>
                    <a href="#" className="contact">Contact us</a>
                </div>
            </div>

            <header>
                <h3 className="logo">
                    <NavLink to="/"><img
                        src={logo}
                        alt="logo"
                        style={{ width: "163px", height: "62px", objectFit: "cover" }}
                    /></NavLink>
                </h3>
                <nav ref={navRef} className="navbar">
                    <ul className="li-container">
                        <li>
                            <NavLink
                                to="/about"
                                className="nav-links"
                            >
                                AboutSeo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/search-engine-optimization-dubai"
                                className="nav-links"
                            >
                                Seo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/guest-blogging-services-dubai"
                                className="nav-links"
                            >
                                Guestposting
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/careers"
                                className="nav-links"
                            >
                                Career
                            </NavLink>
                        </li>
                        <li
                            className="dropdown"
                            onMouseEnter={() => window.innerWidth > 1024 && setDropdownOpen(true)}
                            onMouseLeave={() => window.innerWidth > 1024 && setDropdownOpen(false)}
                            onClick={handleDropdownClick}
                        >
                            <a className="nav-links">
                                Branding & lead gen
                                <span className="drop-icon"><i className="fa-solid fa-circle-chevron-down"></i></span>
                            </a>
                            {(isDropdownOpen || isMobileDropdownOpen) && (
                                <ul className="dropdown-content">
                                    <li className="drop-li">
                                        <img src={menuSearchEngineMarketing} alt="menuSearchEngineMarketing" className="drop-img" />
                                        <NavLink to="/search-engine-maketing-dubai">Search Engine Marketing</NavLink>
                                    </li>
                                    <li className="drop-li">
                                    <img src={menuSocialMediaMarketing} alt="menuSearchEngineMarketing" className="drop-img" />
                                        <NavLink to="/social-media-optimization-dubai">Social Media Marketing</NavLink>
                                    </li>
                                    <li className="drop-li">
                                    <img src={menuMobileAppMarketing} alt="menuSearchEngineMarketing" className="drop-img" />
                                        <NavLink to="/mobile-app-marketing-dubai">Mobile App Marketing</NavLink>
                                    </li>
                                    <li className="drop-li">
                                    <img src={menuContentMarketing} alt="menuContentMarketing" className="drop-img" />
                                        <NavLink to="/content-writing-services-dubai">Content Marketing</NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <NavLink
                                to="/digital-marketing-pricing"
                                className="nav-links"
                            >
                                Pricing
                            </NavLink>
                        </li>
                    </ul>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <div className="login">
                        <button className="website-btn">Free Website Audit</button>
                    </div>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </header>
        </div>
    );
}

export default Navbar;
