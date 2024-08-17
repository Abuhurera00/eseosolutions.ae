import React, { useState, useEffect } from 'react';
import '../Styles/GuestLearnMore.css'
import guestfaqbg from '../assets/guestfaqbg.png'

const SELearnmore = () => {
    const [openAccordion, setOpenAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };


    const faqItems = [
        {
            question: "  Is PPC the Right Lead Gen Method for My Business?",
            answer: "Definitely. When you are running an online business, lead generation is going to be a task. And PPC is one of the quickest ways to generate qualified leads for your business. So, if your target audience heavily searches for your products online; you must bet on PPC services for optimum ROI."
        },
        {
            question: "Are PPC Services Expensive?",
            answer: "The costs incurred on PPC campaigns are dependent on the keywords that you are targeting in a particular geography. In technical terms, if the competition is exorbitantly high; the cost per click will be higher. However, our PPC experts help you place bids on the right keywords that have a high chance of improving your conversion rates"
        },
        {
            question: "What If My Website Already Ranks on Search Engines?",
            answer: "This is one of the classical mistakes that many business owners commit. Your website might be ranking today but with ever evolving search engine algorithms, you must have a safety net to safeguard your lead generation mechanism and there’s no way better than investing in PPC services"
        },
        {
            question: "Can PPC increase my website traffic?",
            answer: "Yes. When your campaigns are well funded and designed; your traffic numbers will be showing an upward trend within a few months."
        },
        {
            question: " Who Will Be My Point of Contact for Your PPC Services?",
            answer: "We will assign a dedicated PPC manager for your account who will be doing everything from setting up your campaigns, modifying them to informing you about the latest development with monthly reports. Apart from that, you will always be in loop for any mission critical changes to your ad campaigns."
        },
        {
            question: "hat’s Your Pricing Model?",
            answer: "The pricing model varies on the number of keywords and the criticality of the campaigns. Therefore, we have a flexible pricing model and will be creating a customized plan for you before we start working on ad campaigns."
        }
    ];


    return (
        <section className='glearn-sect'>
            <div className="glearn-cont">
                <div className="glearn-row glearn-align">
                    <div className="glearn-col">
                        <h2 className="glearn-h2" style={{color: '#212529'}}>Go ahead asked Questions About PPC Services</h2>
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
                            <a href="#" className="btn-center secondary1-btn gdubai-btn-ml glearn-btn-mt">Talk to our Experts</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SELearnmore
