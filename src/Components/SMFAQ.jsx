import React, { useState, useEffect } from 'react';
import '../Styles/GuestLearnMore.css'

const SMFAQ = () => {
    const [openAccordion, setOpenAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };


    const faqItems = [
        {
            question: "What Social Media Metrics Can I Expect to Improve?",
            answer: "Depending on the social media platform, there are a few broad metrics to consider such as people reached, total number of likes, number of subscribers, website traffic & reshares. Based on the agreeable metrics, we will dedicate all our efforts to improve those metrics month on month."
        },
        {
            question: "How Many New Followers Generally Join a Page Every Month?",
            answer: "That completely depends on the niche you are operating in. In the B2C space, the number of followers can be exorbitant; ranging from a few hundreds to even thousands. However, with adequate brainstorming; our B2B clients also witness gratifying results. Apart from audience interest, there are plenty of factors that come into play. Moreover, whether you are going for an organic or paid ad approach can also dictate the results."
        },
        {
            question: "How Much Website Traffic Can You Generate Every Month?",
            answer: "Again, that depends on your business and the type of campaigns that you deploy. As social media algorithms are constantly changing, the organic route can take longer to show results than paid campaigns. But, we have a record of developing viral campaigns that spark audience interest and send a steady stream of traffic to your website every month"
        },
        {
            question: "What If My Business Is A Complete New Territory For You?",
            answer: "Our social media experts are highly learning agile and would love to take that challenge. We have been driving social media following for brands that are considered to be difficult to penetrate on a social level. But, we have experienced that powerful storytelling can always turn the tables your way. Either ways, we would be designing a campaign only after having a detailed discussion with you."
        },
        {
            question: "What Activities Would You Perform on My Social Media Accounts?",
            answer: "We will be responding to all incoming messages, reviews and post comments. But, that would completely in-line with your brand tone and guidelines; which our social media manager will take a note of during the initial discussions. We would be on your toes to maintain the sanity of your social media brand."
        },
        {
            question: "Can Social Media Marketing Generate Leads for My Business?",
            answer: "Once you develop a loyal following who truly believe in your brand, leads will definitely start pouring in. The first step, however, is to set-up the pages right and post the right content at the right time to generate user traction that takes time; depending on the industry you are operating in."
        }
    ];


    return (
        <section className='glearn-sect'>
            <div className="glearn-cont">
                <div className="glearn-row glearn-align">
                    <div className="glearn-col">
                        <h2 className="glearn-h2" style={{color: '#212529'}}>Frequently Asked Questions About SMO Services
                        </h2>
                        <div className="glearn-row glearn-mt-5">
                            {/* <div className="glearn-left">
                                <img src={guestfaqbg} alt="faqbg" className="glearn-img glearn-dnone glearn-smblock" />
                            </div> */}

                            <div className="glearn-right smfaq-mt">
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
                            <a href="#" className="btn-center secondary1-btn gdubai-btn-ml glearn-btn-mt">Talk to our Experts</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SMFAQ
