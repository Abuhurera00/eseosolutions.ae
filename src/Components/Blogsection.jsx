import React from 'react'
import "../Styles/Blogsection.css";
import SEOWorldIn2022img2 from "../assets/SEOWorldIn2022img2.jpg"
import LinkBuildingStrategiesimg2 from "../assets/LinkBuildingStrategiesimg2.png"
import whyseoisimportantforimg2 from "../assets/whyseoisimportantforimg2.png"

const Blogsection = () => {
  return (
    <section className='blog-section'>
      <div className="blog-cont">
        <div className="blog-row align-item">
            <div className="heading-left">
                <h2 className="orange-color">Our Blog</h2>
                <h3>Innovation and new Ideas</h3>
            </div>
            <div className="para-right">
                <p>Welcome to Dubai's best and most reliable SEO blog. At the eSEO blog, we share the latest news and trends in the digital marketing world, such as SEO, Link Building, PPC, ORM, and SMO.</p>
            </div>
        </div>

        <div className="blog-row mt-5">
            <div className="blog">
                <div className="blog-img-holder">
                    <a href="#"><img src={SEOWorldIn2022img2} alt="SEOWorldIn2022img2" className="blog-img" /></a>
                    <small className='blog-date'>February 26, 2022</small>
                </div>

                <a href="#"><h3>Top 10 Things To Keep An Eye On In The SEO World In 2022</h3></a>
                <p>In the highly competitive world, most businesses utilize digital marketing strategies to achieve faster growth. No wonder digital marketing efforts will bring positive benefits. Whether a small-scale </p>
            </div>
            <div className="blog">
                <div className="blog-top">
                    <div className="blog-top-img-holder">
                        <a href="#"><img src={LinkBuildingStrategiesimg2} alt="LinkBuildingStrategiesimg2" className='blog-img' style={{ maxWidth: "260px" }} /></a>
                    </div>
                    <div className="blog-top-content">
                        <small className='date-blog'>February 26, 2022</small>
                        <a href="#"><h3>What are the right Link Building Strategies? </h3></a>
                        The importance of link building cannot be overstated; if done correctly, it may boost your search engine results. If anything goes wrong, your position in search results will be lost. Link construc
                    </div>
                </div>

                <div className="blog-bottom">
                <div className="blog-top-img-holder">
                        <a href="#"><img src={whyseoisimportantforimg2} alt="whyseoisimportantforimg2" className='blog-img' style={{ maxWidth: "260px" }} /></a>
                    </div>
                    <div className="blog-top-content">
                        <small className='date-blog'>September 22, 2021</small>
                        <a href="#"><h3>Why SEO is Important For Every Business? </h3></a>
                        SEO has been lauded, misunderstood, oversimplified, and even demonized since the first search engine was developed. In fact, even the most knowledgeable company owners are unaware of the significance
                    </div>
                </div>
            </div>
        </div>

        <div className="btn-cont">
            <a href='#' className="outline-btn">See All Blogs</a>
            <a href='#' className="secondary-btn">Free Audit Website</a>
        </div>
      </div>
    </section>
  )
}

export default Blogsection
