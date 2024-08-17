import React, { useState, useEffect } from 'react';
import '../Styles/GuestLearnMore.css'
import guestfaqbg from '../assets/guestfaqbg.png'

const MAAccord = () => {
    const [openAccordion, setOpenAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };


    const faqItems = [
        {
            question: "Why Should I Go for Mobile App Marketing?",
            answer: "As per recent reports, app downloads are going to surpass 352 billion by 2021 and therefore, getting noticed in a crowded app market would be a daunting task. Therefore, to stay relevant in the mobile app segment, you need dedicated mobile app marketing services to maintain visibility and persuade your target customers to download your app"
        },
        {
            question: "What’s the Right Time to Market My Mobile App?",
            answer: "Given a crowded app market where you have an app to cater to every conceivable segment; the sooner you invest in app marketing, the better. In fact, you should be marketing your app straightaway after the build phase to maximize user base and get the best possible ROI."
        },
        {
            question: "What Exactly Do You Do With App Store Optimization?",
            answer: "We perform a number of actions to optimize your app in the app store such as building icons, taking screenshots, preparing short videos and measures to enhance your app rating. But, every step is duly documented and sent for your review first before any implementation takes place."
        },
        {
            question: "Can My App Go Viral With App Marketing Services?",
            answer: "Why not. The success of an app is defined by the purpose it caters to. So, if users are finding your app to improve any area of your life; your app is going to stick. That’s why we perform stringent A/B testing and constant trials to ensure a small segment is already liking your app. Based on the feedback, we suggest you app improvements for massive success on a large scale."
        },
        {
            question: "Can You Help Me Make Money With My App?",
            answer: "Yes. We have identified a number of app monetization methods ranging from advertisements, affiliate marketing, in-app purchases and premium models and depending on your industry, our experts can come up with a detailed monetization plan for your mobile app."
        },
        {
            question: "How Soon Can My App Appear at Top Of the Results?",
            answer: "We perform a rigorous app optimization process and depending on the customer base you are targeting, results can start pouring in within a few months."
        }
    ];


    return (
        <section className='glearn-sect'>
            <div className="glearn-cont">
                <div className="glearn-row glearn-align">
                    <div className="glearn-col">
                        <h2 className="glearn-h2" style={{color: '#212529'}}>Go ahead asked Questions About ASO Services</h2>
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

export default MAAccord
