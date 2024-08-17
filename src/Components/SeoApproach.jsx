import React from 'react'
import "../Styles/SeoApproach.css";
import approachGroup2170 from "../assets/approachGroup2170.svg"
import approachGroup2175 from "../assets/approachGroup2175.svg"
import approachGroup2174 from "../assets/approachGroup2174.svg"
import approachPath5410 from "../assets/approachPath5410.svg"
import approachGroup2169 from "../assets/approachGroup2169.svg"
import appraochbanner from "../assets/appraochbanner.svg"
import approachideageneration from "../assets/approachideageneration.svg"
import approachquarterlytargets from "../assets/approachquarterlytargets.svg"
import approachcallsMonthlyMeetings from "../assets/approachcallsMonthlyMeetings.svg"
import approachroadmapanalysis from "../assets/approachroadmapanalysis.svg"

const SeoApproach = () => {
  return (
    <section className='approach-sect'>
      <div className="approach-sect1">
        <div className="approach-cont text-center">
          <div className="approach-row">
            <div className="approach-col">
              <h2 className="approach-h2">Our Approach to SEO</h2>
              <p className="approach-p">Our five-step process to SEO ensures that your business gets the most out of our services. Although, when it comes to SEO, every business has its own unique set of challenges, our decade-long experience has indicated that the five-step process will result in long-term success thanks to the continuous stream of high converting organic traffic. </p>

              <div className="approach-btn-cont">
                <button className="approach-btn active">
                  <img src={approachGroup2170} alt="Group2170" className="approach-img" />
                </button>
                <button className="approach-btn">
                  <img src={approachGroup2175} alt="Group2175" className="approach-img" />
                </button>
                <button className="approach-btn">
                  <img src={approachGroup2174} alt="Group2174" className="approach-img" />
                </button>
                <button className="approach-btn">
                  <img src={approachPath5410} alt="path5410" className="approach-img" />
                </button>
                <button className="approach-btn">
                  <img src={approachGroup2169} alt="Group2169" className="approach-img" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seo-tab-content approach-cont">
        <div className="tab-pane show active">
          <div className="approach-row approach-align-items">
            <div className="approach-tab-left">
              <h3>Custom Strategy Building</h3>
              <p>Together with you, we develop the most appropriate digital marketing strategy per your current standing in the market &amp; competition's fierceness which helps acquire greater prestige, relevance, and visibility on the network.</p>
              <ul className="list-unstyled lh-lg">
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Project brief:</strong> Define client information &amp; business goals
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Keyword research:</strong> Define potential target keywords.
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>SEO audit:</strong>Create a current baseline for SEO
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Competitive analysis:</strong> Define SEO competitors
                </li>
              </ul>
              <a href="#" className="improve-btn">Get Started Now</a>
            </div>

            <div className="approach-tab-right">
              <img src={appraochbanner} alt="1" className="d-none d-md-block approach-img-ban" />
            </div>

          </div>
        </div>

        <div className="tab-pane">
          <div className="approach-row approach-align-items">
            <div className="approach-tab-left">
              <h3>Diverse Idea Generation</h3>
              <p>With a deep understanding of business requirements and expectations, we collaborate seamlessly across our teams to craft ideas and digital experiences that people love. A comprehensive SEO strategy prepares your business for long-term success!
              </p>
              <ul className="list-unstyled lh-lg">
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Understanding idea:</strong>Understand your idea &amp; business needs
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Idea analysis:</strong> Analyzing your idea &amp; processes
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Idea audit:</strong> Audit as per your business domain
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Diverse suggestions:</strong> Offer diverse suggestions and implementation
                </li>
              </ul>
              <a href="#" className="improve-btn">Get Started Now</a>
            </div>
            <div className="approach-tab-right">
              <img src={approachideageneration} alt="ideageneration" className="d-none d-md-block approach-img-ban" />
            </div>
          </div>
        </div>

        <div className="tab-pane">
          <div className="approach-row approach-align-items">
            <div className="approach-tab-left">
              <h3>Setting up quarterly targets</h3>
              <p>To make your site appear in the first place, we set up SMART quarterly targets for our highly qualified SEO team and keep a keen eye on the performance metrics.</p>
              <ul className="list-unstyled lh-lg">
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Creating quarterly goals:</strong> It starts with goals and decision making
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Think Quarterly:</strong> Thinking for quarterly goals
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Set Benchmarks:</strong> Regular meetings with clients 
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Room for Flexibility: </strong>  Creating strategies to leave room for change
                </li>
              </ul>
              <a href="#" className="improve-btn">Get Started Now</a>
            </div>
            <div className="approach-tab-right">
              <img src={approachquarterlytargets} alt="quarterlytargets" className="d-none d-md-block approach-img-ban" />
            </div>
          </div>
        </div>
        <div className="tab-pane">
          <div className="approach-row approach-align-items">
            <div className="approach-tab-left">
              <h3>Weekly calls & Monthly Meetings</h3>
              <p>OOur relationship with clients doesn't end with a transaction, we provide detailed and constant reports on the evolution of the performance of the SEO campaign.. We keep our clients involved with us through weekly and monthly reporting so that they can see how their website climbs positions in real time, simply and transparently.</p>
              <ul className="list-unstyled lh-lg">
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Advanced preparation:</strong>  Preparing everything before the call
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Reliable format:</strong> We follow a reliable format for participants
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Role responsibilities:</strong> Deciding the participant's role
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Make a commitment:</strong> Creating challenges and commitment
                </li>
              </ul>
              <a href="#" className="improve-btn">Get Started Now</a>
            </div>
            <div className="approach-tab-right">
              <img src={approachcallsMonthlyMeetings} alt="callsMonthlyMeetings" className="d-none d-md-block approach-img-ban" />
            </div>
          </div>
        </div>
        <div className="tab-pane">
          <div className="approach-row approach-align-items">
            <div className="approach-tab-left">
              <h3>Regular roadmap analysis</h3>
              <p>We develop a perfect roadmap for your business. Our highly-qualified SEO experts regularly evaluate your goals as per the results and make necessary changes in the SEO strategy to achieve higher visibility in search engines and maintain performance.</p>
              <ul className="list-unstyled lh-lg">
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Establish goals:</strong> Determining roadmap goals and team
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Gather inputs:</strong> Collecting issues from existing research
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Visualize and share:</strong> Result visualization and setting a timeline
                </li>
                <li>
                  <i className="fa-solid fa-check seo-me-2"></i>
                  <strong>Regular update: </strong> Revisit for updates and make adjustments 
                </li>
              </ul>
              <a href="#" className="improve-btn">Get Started Now</a>
            </div>
            <div className="approach-tab-right">
              <img src={approachroadmapanalysis} alt="roadmapanalysis" className="d-none d-md-block approach-img-ban" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeoApproach
