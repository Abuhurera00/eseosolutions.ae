import React from 'react'
import "../Styles/FreeSeoAudit.css";

const FreeSeoAudit = () => {
  return (
    <section className='audit-sect'>
      <div className="audit-cont">
        <h2>Get a Free SEO Audit!</h2>
        <div className="audit-row audit-pt-2">
            <div className="audit-col">
                <p>Let us increase the search engine rank and site traffic of your website. Our team of professional SEO experts and copywriters allows us to meet the needs of companies with complex websites in competitive industries.</p>
                <form action="" className="audit-row">
                    <div className="audit-row audit-g-1">
                        <div className="audit-inputs audit-md">
                        <input type="url" className="audit-form-control" id="free_website" placeholder="Enter Your Website URL.." />
                        </div>

                        <div className="audit-inputs audit-md">
                        <input type="email" className="audit-form-control" id="free_email" placeholder="Enter Your Email ID" />
                        </div>

                        <div className="audit-inputs audit-auto">
                        <button type="submit" className="audit-btn">Free Website Audit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FreeSeoAudit
