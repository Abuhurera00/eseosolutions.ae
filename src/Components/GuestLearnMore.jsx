import React, { useState, useEffect } from 'react';
import '../Styles/GuestLearnMore.css'
import guestfaqbg from '../assets/guestfaqbg.png'

const GuestLearnMore = () => {

    const [openAccordion, setOpenAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };


    const faqItems = [
        {
            question: "Why Should I opt for Guest Blogging?",
            answer: "When you get started with an online business, getting traffic and recognition can be a tricky game because Google takes time to index new pages and you need to position your website as an authority in your niche. And, there can’t be a better and quicker way than guest posting. By guest posting, you can boost your brand authority in any niche and get instant exposure in front of a proven audience. If you go by search engine guidelines, guest blogging can help you boost organic rankings for your preferred keywords, earn brand mentions and get targeted traffic to your website."
        },
        {
            question: "Is Guest Blogging a Safe Alternative?",
            answer: "Most guest posting providers build spammy backlinks from irrelevant websites, trying to fetch higher search engine rankings for their clients; which invites penalties. At ESEO, we only help you post high quality guest posts on niche websites in an organic fashion, which is under the ambit of Google guidelines. This way, you don’t have to fear about any penalties. To ease your concerns, we follow a definite checklist before any website can qualify for your guest blogging initiatives including filters for IP, domain age, page authority, minimum organic traffic parameters, google indexing status and more."
        },
        {
            question: "Is Guest Blogging the Only Way to Secure Backlinks?",
            answer: "No, there are multiple ways to secure quality backlinks but if you are to rank for your target keywords; Google prefers organic and white hat SEO methods. Of course you can go for other methods like influencer outreach, infographics and all; however these initiatives would take time to deliver SEO results. Given that your business shouldn't be on the backburner, you can approach webmasters with quality content that can add value to their audience, provide exposure to your business while fetching a backlink in return."
        },
        {
            question: "How Many Backlinks Per Month Should I Build with Guest Blogging?",
            answer: "Every online business wants first page rankings for their business keywords that can help the leadbase grow. At ESEO, we prepare a separate plan for informational and transactional keywords and begin the outreach process with a fixed target in mind. Most search engines including Google promote diversity in the link farm and therefore, we carefully assess the number of backlinks that can prove to be a needle mover for your rankings."
        },
        {
            question: "Does ESEO Sticks to Google Guidelines?",
            answer: "Yes. That’s why we run a manual outreach process with high quality content and try to convince webmasters about how a particular piece of content can impact their audience and they are more than happy to accept our submission, giving credit in the form of a backlink in return. And the best part, we always focus on building backlinks from the content body over the ones buried in the author bio. Although links in the author bio are fruitful to get you introduced to a new audience, text-based backlinks are always better when it comes to fetch keyword rankings."
        },
        {
            question: "How Do You Find Out Niche Websites for My Business?",
            answer: "We have a dedicated team of experts that does the job. Depending on your business and the type of customers it targets, our team fetches the websites where your customers are spending the most time on; which also happen to be the sites catering to a similar niche as yours. All in all, we use both fixed and customized templates to begin the outreach process. Even if a webmaster won’t respond in the first shot, we follow up with a set of follow up emails to gather their interest, add value in the form of data-driven content and garner backlinks."
        }
    ];


    return (
        <section className='glearn-sect'>
            <div className="glearn-cont">
                <div className="glearn-row glearn-align">
                    <div className="glearn-col">
                        <h2 className="glearn-h2">Learn More About Guest Blogging</h2>
                        <div className="glearn-row glearn-mt-5">
                            <div className="glearn-left">
                                <img src={guestfaqbg} alt="faqbg" className="glearn-img glearn-dnone glearn-smblock" />
                            </div>

                            <div className="glearn-right">
                                <div className="accordion glearn-acc-5" id="faqAccordion">
                                    {faqItems.map((item, index) => (
                                        <div className="accordion-item" key={index} onClick={() => toggleAccordion(index)}>
                                            <h2 className="accordion-header" id={`heading-${index}`}>
                                                <button
                                                    className={`accordion-button shadow-none blue-color ${openAccordion === index ? '' : 'collapsed'}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse-${index}`}
                                                    aria-expanded={openAccordion === index ? 'true' : 'false'}
                                                    aria-controls={`collapse-${index}`}
                                                >
                                                    {item.question}
                                                </button>
                                            </h2>
                                            <div className={`accordion-collapse ${openAccordion === index ? 'show' : ''}`}>
                                                <div className="accordion-body">{item.answer}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <h3 className="glearn-h3">Have Questions for Our Team?</h3>
                        <div className="glearn-text-center">
                            <a href="#" className="btn-center secondary-btn gdubai-btn-ml glearn-btn-mt">Talk to our Experts</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GuestLearnMore
