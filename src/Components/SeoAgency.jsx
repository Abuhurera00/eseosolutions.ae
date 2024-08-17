import React from 'react'
import '../Styles/SeoAgency.css'
import seoagencyimg from "../assets/seoagencyimg.png"
import seoeye from "../assets/seoeye.svg"
import seoagencyarrowup from "../assets/seoagencyarrowup.svg"
import seoagencyphone from "../assets/seoagencyphone.svg"

const SeoAgency = () => {
  return (
    <section className='seoagency-sect'>
      <div className="seoagency-cont">
        <div className="seoagency-row seoagency-align">
            <div className="seoagency-col-left">
              <img src={seoagencyimg} alt="download" className='seoagnecy-banner' />
              <a href="#" className='secondary1-btn seoagency-btn'>Free website Audit</a>
            </div>
 
        <div className="seoagency-col-right">
           <h2 className="seoagency-h2">What do we offer you as an SEO Agency?</h2>
           <h3>Implementing Effective SEO Strategy for Long Term Business Growth</h3>
           <p className="seoagency-p">Nowadays, SEO optimization is an indispensable element for businesses that want to succeed online. Our SEO strategies will help you grow your business online and rank higher in Google search results. In addition, our dedicated team will also provide weekly and monthly reports of your page's positions regarding the used keywords, links obtained and indexed pages.   </p>
           <div className="seoagency-row seoagency-text-center">
            <div className="seoagency-card pt-lg-5">
                <div className="seoagency-card-inner h-100" style={{backgroundColor: '#E5F9F9'}}>
               <img src={seoeye} alt="Group_2223" />
               <h3 style={{color: '#009e9e'}}>Global SEO</h3>
               <p>We combine creative SEO tactics, enhanced marketing techniques, and high-end inbound content marketing to help businesses rank in the targeted country. </p>
                </div>
            </div>
            <div className="seoagency-card">
            <div className="seoagency-card-inner" style={{backgroundColor: '#FFE8EF'}}>
               <img src={seoagencyarrowup} alt="Group_2224" />
               <h3 style={{color: '#e20e4f'}}>Local SEO</h3>
               <p>We help position your business in the first position of local searches performed by users.  </p>
                </div>
            </div>


            <div className="seoagency-card pt-lg-5">
            <div className="seoagency-card-inner h-100" style={{backgroundColor: '#F8F1E9'}}>
               <img src={seoagencyphone} alt="Group_2225" />
               <h3 style={{color: '#ed8003'}}>Naitonal SEO</h3>
               <p>Our highly proficient SEO team has in-depth knowledge of the ongoing market trends and can make you a national leader in no time. </p>
                </div>
            </div>
           </div>
        </div>

        </div>
      </div>
    </section>
  )
}

export default SeoAgency
