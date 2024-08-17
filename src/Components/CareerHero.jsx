import React from 'react'
import "../Styles/CareerHero.css";
import careerheroban from "../assets/careerheroban.svg"

const CareerHero = () => {
    return (
        <section className='careerhero-sect'>
            <div className="careerhero-cont">
                <div className="careerhero-row">
                    <div className="careerhero-left">
                        <h1 className="careerhero-h1">Build your skills and your career </h1>
                        <p className="careerhero-p">Join A Team That Celebrates You Daily!</p>
                        <p></p>
                        <p>Our people are not only our greatest asset but also our biggest competitive advantage. We don’t call our employees- employees, we call them associates.</p>
                        <p></p>
                    </div>

                    <div className="careerhero-right">
                        <img src={careerheroban} alt="Group 202535" className="careehero-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CareerHero
