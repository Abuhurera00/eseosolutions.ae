import React, { useState, useEffect } from 'react';
import '../Styles/GuestLearnMore.css'

const CMAccord = () => {
    const [openAccordion, setOpenAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };


    const faqItems = [
        {
            question: "Why Should I Opt for Content Marketing?",
            answer: "As per recent research, content marketing generates 3X as many leads as outbound marketing while costing 62 percent less than traditional marketing. So, if you want your business to get quickly noticed on the web; our content marketing services at ESEO can make that happen without burning your pockets."
        },
        {
            question: "How Can Content Marketing Benefit My Business?",
            answer: "Every business requires audience trust to convert them into paying customers and content marketing does that in an effective manner. If you look at a typical conversion funnel, content marketing works at all stages namely Awareness, Consideration, and decision via different content collaterals to boost your conversions."
        },
        {
            question: "Can I Generate Leads From Content Marketing?",
            answer: "Yes, as you continue creating content that aims at solving user problems; you can land qualified leads for your business. However, the entire process is driven through multiple content types. For instance, blogs are good at creating awareness for your products while more long-form content such as ebooks and whitepapers are typical lead magnets. So, you need to produce both which we determine as part of your content strategy. We do both for you at ESEO solutions."
        },
        {
            question: "How Frequently Should I Churn Content?",
            answer: "Again, the frequency of churning content depends on the reading habits of your audience. Certain businesses are better off with churning long form content twice a month while others require short form content every single day to keep users engaged. Therefore, we will decide an optimum frequency after studying your industry."
        },
        {
            question: "How Do You Measure the Results of Content Marketing?",
            answer: "There are different metrics that come to play when it comes to measuring content marketing. For instance, if you are trying to boost brand awareness; total traffic, shares and bounce rate can be a measure of success. But, in case of lead generation, number of sign-ups, closures and average time to close can paint the real picture."
        },
        {
            question: "How Soon Can I Reap Results from Content Marketing?",
            answer: "Content marketing is the sum total of a number of activities that take time to show results. As the old adage says, content marketing is a marathon and not a sprint race. Think content marketing as a timeless asset. What you create today on any platform is going to yield traction and leads for years to come."
        }
    ];


    return (
        <section className='glearn-sect'>
            <div className="glearn-cont">
                <div className="glearn-row glearn-align">
                    <div className="glearn-col">
                        <h2 className="glearn-h2" style={{color: '#212529'}}>Frequently Asked Questions About Content Marketing
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

export default CMAccord
