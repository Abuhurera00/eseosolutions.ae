import React from 'react'
import "../Styles/Ourjourney.css";
import tfcentury from "../assets/tfcentury.svg"
import journey2013 from "../assets/journey2013.png"
import journey2017 from "../assets/journey2017.png"
import journey2011 from "../assets/journey2011.png"
import journey2015 from "../assets/journey2015.png"
import journey2021 from "../assets/journey2021.png"
import expansionteam from "../assets/expansionteam.svg"
import movegurugram from "../assets/movegurugram.svg"
import newbenchmarks from "../assets/newbenchmarks.svg"
import officedubai from "../assets/officedubai.svg"

const Ourjourney = () => {
  return (
    <section className="journey-sect">
      <div className="span-cont">
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

      <div className="journey-cont d-md-none">
        <div className="journey-row">
            <div className="journey-heading"><h2>A Timeline of our journey</h2></div>

            <div className="journey-items">
                <div className="year-journey">
                    <div className="image-holder">
                        <img src={tfcentury} alt="21-century" />
                    </div>
                    <div className="journey-content">
                        <h4>01</h4>
                        <h2>2011</h2>
                        <h3>21ST-Century-Agency</h3>
                        <p>After Realizing the Irregularities in the Digital Marketing World, Deepak & Sumit Shake Hands to Create a 21ST-Century Marketing Agency.</p>
                    </div>
                </div>
            </div>
            <div className="journey-items">
            <div className="year-journey">
                    <div className="image-holder">
                        <img src={expansionteam} alt="expansionteam" />
                    </div>
                    <div className="journey-content">
                        <h4>02</h4>
                        <h2>2013</h2>
                        <h3>Expansion of Team</h3>
                        <p>eSEO Anecdote Began in Ambala With 10+ Team Members and Touched 55+ Businesses.</p>
                    </div>
                </div>
            </div>
            <div className="journey-items">
            <div className="year-journey">
                    <div className="image-holder">
                        <img src={movegurugram} alt="movegurugram" />
                    </div>
                    <div className="journey-content">
                        <h4>03</h4>
                        <h2>2015</h2>
                        <h3>Move to Gurugram</h3>
                        <p>Faced Office-Space Crunch & Shifted Entire eSEO Operations to Dedicated Space in Millennium City Gurugram.</p>
                    </div>
                </div>
            </div>
            <div className="journey-items">
            <div className="year-journey">
                    <div className="image-holder">
                        <img src={newbenchmarks} alt="newbenchmarks" />
                    </div>
                    <div className="journey-content">
                        <h4>04</h4>
                        <h2>2017</h2>
                        <h3>New Benchmarks</h3>
                        <p>Hit New Benchmarks With 350+ Customers and 50+ Team Members.</p>
                    </div>
                </div>
            </div>
            <div className="journey-items">
            <div className="year-journey">
                    <div className="image-holder">
                        <img src={officedubai} alt="officedubai" />
                    </div>
                    <div className="journey-content">
                        <h4>05</h4>
                        <h2>2021</h2>
                        <h3>Office in Dubai</h3>
                        <p>Successfully Established a Branch in Dubai With a Vision to Cover the Whole Middle East.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="journey-cont d-none d-sm-block d-sm-none d-md-block">
        <div className="journey-row">
            <div className="journey-heading"><h2>A Timeline of our journey</h2></div>
            <div className="journey-empty-div"></div>
            <div className="journey-items">
                <div className="year-journey">
                    <div className="image-holder">
                        <img src={journey2013} alt="21-century" />
                    </div>
                    <div className="journey-content">
                        <h4>02</h4>
                        <h2>2013</h2>
                        <h3>Expansion of Team</h3>
                        <p>eSEO Anecdote Began in Ambala With 10+ Team Members and Touched 55+ Businesses.</p>
                    </div>
                </div>
            </div>
            <div className="journey-items">
                <div className="year-journey">
                    <div className="image-holder">
                        <img src={journey2017} alt="journey2017" />
                    </div>
                    <div className="journey-content">
                        <h4>04</h4>
                        <h2>2017</h2>
                        <h3>New Benchmarks</h3>
                        <p>Hit New Benchmarks With 350+ Customers and 50+ Team Members.</p>
                    </div>
                </div>
            </div>
            <div className="journey-items"></div>
        </div>
      </div>

      <div className="journey-cont timeline-border d-none d-sm-block d-sm-none d-md-block">
      <div className="journey-row">
      <div className="journey-items">
                <div className="year-journey">
                    <div className="image-holder">
                        <img src={journey2011} alt="journey2011" />
                    </div>
                    <div className="journey-content">
                        <h4>01</h4>
                        <h2>2011</h2>
                        <h3>21ST-Century-Agency</h3>
                        <p>After Realizing the Irregularities in the Digital Marketing World, Deepak & Sumit Shake Hands to Create a 21ST-Century Marketing Agency.</p>
                    </div>
                </div>
            </div>
            <div className="journey-items">
                <div className="year-journey">
                    <div className="image-holder">
                        <img src={journey2015} alt="journey2015" />
                    </div>
                    <div className="journey-content">
                        <h4>03</h4>
                        <h2>2015</h2>
                        <h3>Move to Gurugram</h3>
                        <p>Faced Office-Space Crunch & Shifted Entire eSEO Operations to Dedicated Space in Millennium City Gurugram.</p>
                    </div>
                </div>
            </div>
            <div className="journey-items">
                <div className="year-journey">
                    <div className="image-holder">
                        <img src={journey2021} alt="journey2021" />
                    </div>
                    <div className="journey-content">
                        <h4>05</h4>
                        <h2>2021</h2>
                        <h3>Office in Dubai</h3>
                        <p>Successfully Established a Branch in Dubai With a Vision to Cover the Whole Middle East.</p>
                    </div>
                </div>
            </div>
      </div>
      </div>
    </section>
  )
}

export default Ourjourney
