import React from 'react'
import '../Styles/SMSocialmedia.css'
import Instagram from '../assets/Instagram.png'
import Linkedin1 from '../assets/Linkedin1.png'
import facebook from '../assets/facebook.png'
import youtube1 from '../assets/youtube1.png'
import Twitter from '../assets/Twitter.png'
import Tumblr from '../assets/Tumblr.png'

const SMSocialmedia = () => {
    return (
        <section className='socialmedia-sect'>
            <div className="socialmedia-cont">
                <div className="socialmedia-row socialmedia-align">
                    <div className="socialmedia-col socialmedia-left">
                        <h2>List of Some Popular <br /><span className="socialmedia-span">Social Media Channels</span></h2>
                        <p>Bring more traffic to your website with the help of new proven techniques we can offer At e-SEO, we provide the best SMO services concentrated on new followers generation, engaging the available users, generating profit-generating campaigns that offer real results, </p>
                        <a href="#" className="secondary1-btn socialmedia-btn">Get Started Now</a>
                    </div>

                    <div className="socialmedia-col socialmedia-right">
                        <div className="socialmedia-row">
                            <div className="socialmedia-box-col socialmedia-box-pt socialmedia-box-mt">
                                <a href="#" className="socialmedia-icons">
                                    <img src={Instagram} alt="Instagram" className="socialmedia-img" />
                                    <span className="socialmedia-name">Instagram</span>
                                </a>

                                <a href="#" className="socialmedia-icons">
                                    <img src={Linkedin1} alt="Linkedin1" className="socialmedia-img" />
                                    <span className="socialmedia-name">Linkedin</span>
                                </a>
                            </div>

                            <div className="socialmedia-box-col socialmedia-box-pt">
                                <a href="#" className="socialmedia-icons">
                                    <img src={facebook} alt="facebook" className="socialmedia-img" />
                                    <span className="socialmedia-name">Facebook</span>
                                </a>

                                <a href="#" className="socialmedia-icons">
                                    <img src={youtube1} alt="youtube1" className="socialmedia-img" />
                                    <span className="socialmedia-name">YouTube</span>
                                </a>
                            </div>

                            <div className="socialmedia-box-col">
                                <a href="#" className="socialmedia-icons">
                                    <img src={Twitter} alt="Twitter" className="socialmedia-img" />
                                    <span className="socialmedia-name">Twitter</span>
                                </a>

                                <a href="#" className="socialmedia-icons">
                                    <img src={Tumblr} alt="Tumblr" className="socialmedia-img" />
                                    <span className="socialmedia-name">Tumblr</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SMSocialmedia
