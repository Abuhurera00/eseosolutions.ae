import React from 'react'
import "../Styles/Mindset.css";
import aboutkeywordrank from "../assets/aboutkeywordrank.svg"
import aboutprojectsuccessfulcompleted from "../assets/aboutprojectsuccessfulcompleted.svg"
import aboutorganictrafficgenerate from "../assets/aboutorganictrafficgenerate.svg"
import abouthappycustomers from "../assets/abouthappycustomers.svg"

const Mindset = () => {
    return (
        <section className='mindset-sect'>
            <div className="mindset-cont">
                <span className="mindset-span">Let's talk Numbers</span>
                <h2>Experience and Mindset in Building Success</h2>

                <div className="mindset-row">
                    <div className="mindset-col">
                        <div className="mindset-image-holder">
                            <img src={aboutkeywordrank} alt="aboutkeywordrank" className="mindset-img" />
                        </div>
                        <span className="h1 d-block">2L+</span>
                        <p className="mindset-p">Keyword Rank</p>
                    </div>
                    <div className="mindset-col">
                        <div className="mindset-image-holder">
                            <img src={aboutprojectsuccessfulcompleted} alt="aboutprojectsuccessfulcompleted" className="mindset-img" />
                        </div>
                        <span className="h1 d-block">700+</span>
                        <p className="mindset-p">Project Successful Completed</p>
                    </div>
                    <div className="mindset-col">
                        <div className="mindset-image-holder">
                            <img src={aboutorganictrafficgenerate} alt="aboutorganictrafficgenerate" className="mindset-img" />
                        </div>
                        <span className="h1 d-block">5.5 M</span>
                        <p className="mindset-p">Organic Traffic Generate</p>
                    </div>
                    <div className="mindset-col">
                        <div className="mindset-image-holder">
                            <img src={abouthappycustomers} alt="abouthappycustomers" className="mindset-img" />
                        </div>
                        <span className="h1 d-block">1,281</span>
                        <p className="mindset-p">Happy Customers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mindset
