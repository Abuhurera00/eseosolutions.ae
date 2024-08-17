import React from 'react'
import "../Styles/Letstalk.css";


const Letstalk = () => {
  return (
    <section className="talk-sect">
      <div className="talk-cont">
        <div className="talk-row">
          <div className="talk-col"></div>
          <div className="talk-col talk-content">
            <h2>Let's talk Numbers</h2>
            <h3>Experience and Mindset in Building Success</h3>
            <p>To derive the expected results, it is vital to have a clear path and stay focused that will assist you in achieving your goals. Our vision is to leverage the full potential of the Internet to deliver measurable outcomes to our clients.</p>
          </div>
          <div className="talk-rank">
            <div className="work-number-area">
              <div className="work-numbers">
                <h2><span className="work-no-span"><span className="counter">2</span>L+</span></h2>
                <p>Keyword Rank</p>
              </div>
              <div className="work-numbers">
              <h2><span className="work-no-span"><span className="counter">700</span>+</span></h2>
              <p>Project Successful Completed</p>
              </div>
              <div className="work-numbers">
              <h2><span className="work-no-span"><span className="counter">5.5</span>M</span></h2>
              <p>Organic Traffic Generate</p>
              </div>
              <div className="work-numbers">
              <h2><span className="work-no-span"><span className="counter">1281</span></span></h2>
              <p>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Letstalk
