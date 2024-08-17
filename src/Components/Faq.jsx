// import React, { useState } from 'react';
// import '../Styles/Faq.css'


// const Faq = () => {
//    const [isVisible, setIsVisible] = useState(false);

//    const toggleAccordion = () => {
//     setIsVisible(!isVisible);
//    }

//     return (
//         <section className='faq-section'>
//             <div className="faq-cont faq-pr">
//                 <div className="faq-row faq-align">
//                     <div className="faq-right">
//                         <h2 className="faq-heading">Some of FAQ's</h2>
//                         <h3>To the innumerable questions &amp; queries, we have curated the right answers for you. </h3>
//                         <div className="scroll-faq-accordion">
//                             <div className="mCustomScrollBox">
//                                 <div className="mcsb-container">
//                                     <div className="accordion" id="faqAccordion">
//                                         <div className="accordion-item" onClick={toggleAccordion}>
//                                             <h2 className="accordion-header" id='heading-1'>
//                                                 <button className="accordion-button shadow-none blue-color " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                                     Why Should I Go for SEO Services?
//                                                 </button>
//                                             </h2>
//                                             <div className={`accordion-collapse ${isVisible ? 'show' : ""}`}>
//                                                 <div className="accordion-body">
//                                                     Living in a world where more than 80% users search for a product or service online, having a web presence has become indispensable. If your business gets first page rankings, this means your future customers bestow more trust and are likely to buy from you. At ESEO, our aim is to help you fetch top spots on search engines for your target keywords.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item" onClick={toggleAccordion}>
//                                             <h2 className="accordion-header" id="headingTwo">
//                                                 <button className="accordion-button shadow-none blue-color  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                     What’s the point of doing SEO when I am selling offline?
//                                                 </button>
//                                             </h2>
//                                             <div className={`accordion-collapse ${isVisible ? 'show' : ""}`}>
//                                                 <div className="accordion-body">
//                                                     As mentioned before, it’s important to build trust with your audience before they become customers. Even if you have an offline presence, it’s essential to have a running website with all your features listed; if you are to attract attention. That’s where SEO comes into play. With our SEO services, we help you connect the road to more leads and recurring sales.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item">
//                                             <h2 className="accordion-header" id="headingThree">
//                                                 <button className="accordion-button shadow-none blue-color  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                     What Services are offered in SEO Package?
//                                                 </button>
//                                             </h2>
//                                             <div className="accordion-collapse">
//                                                 <div className="accordion-body">
//                                                     That completely depends on the current status of the website, the keywords you are trying to rank for among major factors. We will create a customized package depending on your requirements and the level of SEO required to propel your website to the top of search engine rankings. We are not a money minting SEO business, so you can expect complete transparency from our side.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item">
//                                             <h2 className="accordion-header" id="headingThree">
//                                                 <button className="accordion-button shadow-none blue-color  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                     Have You Delivered Results for My Industry in the Past?
//                                                 </button>
//                                             </h2>
//                                             <div className="accordion-collapse">
//                                                 <div className="accordion-body">
//                                                     Apart from the usual industries such as IT, Manufacturing, Retail and Pharma; our SEO experts have worked with challenging industries and delivered impeccable results that other SEO agencies deem impossible. We would be more than happy in discussing your requirements, no matter how difficult that might sound. We always encourage our clients to give a shot, and then we commit to deliver.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item">
//                                             <h2 className="accordion-header" id="headingThree">
//                                                 <button className="accordion-button shadow-none blue-color  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                     How Does Your Reporting Mechanism Looks Like?
//                                                 </button>
//                                             </h2>
//                                             <div className="accordion-collapse">
//                                                 <div className="accordion-body">
//                                                     After having a discussion, we will be agreeing on certain goals based on which we will send you monthly reports to track the progress. Our reporting is quite simple and transparent and will give you a 360-degree view of how your target keywords are performing and how the entire SEO efforts are shaping up.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item">
//                                             <h2 className="accordion-header" id="headingThree">
//                                                 <button className="accordion-button shadow-none blue-color  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                     Can You Help Me with Local SEO?
//                                                 </button>
//                                             </h2>
//                                             <div className="accordion-collapse">
//                                                 <div className="accordion-body">
//                                                     Definitely. Local SEO is our forte and we have helped multiple local businesses acquire top positions on local search engines. We encourage you to discuss your local SEO needs in detail and we are more than happy to help.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item">
//                                             <h2 className="accordion-header" id="headingThree">
//                                                 <button className="accordion-button shadow-none blue-color  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                     How Soon Can We Expect Traffic and Rankings to Pour In?
//                                                 </button>
//                                             </h2>
//                                             <div className="accordion-collapse">
//                                                 <div className="accordion-body">
//                                                     It’s difficult to comment without understanding where your site stands at the moment and the industry you are operating in. SEO is a marathon and not a sprint. Moreover, certain industries and keywords take more time to rank than others. But, with consistent efforts, every mountain can be scaled. Typically, a duration of 6 months to 1 year is recommended to see visible results.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item">
//                                             <h2 className="accordion-header" id="headingThree">
//                                                 <button className="accordion-button shadow-none blue-color  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                     Why Should I Continue SEO After hitting the top spot on Google?
//                                                 </button>
//                                             </h2>
//                                             <div className="accordion-collapse">
//                                                 <div className="accordion-body">
//                                                     This is an area where even pro businesses falter. Even when you are on top of Google search results, you should continue your SEO efforts. There are always changes and fluctuations in search engine algorithms that means your rankings might slip. Therefore, we strongly recommend you to not discontinue your SEO efforts.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item">
//                                             <h2 className="accordion-header" id="headingThree">
//                                                 <button className="accordion-button shadow-none blue-color  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                     Do Your SEO Techniques Pose a Threat to My Website?
//                                                 </button>
//                                             </h2>
//                                             <div className="accordion-collapse">
//                                                 <div className="accordion-body">
//                                                     Not at all. Every SEO technique we deploy lies in the ambit of google and we neither do black hat nor grey hat SEO. We never encourage link spamming or building shady links to your site that do more harm than good to our SEO efforts. We believe in mutual win-win, so always steer clear of disapproved techniques.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item">
//                                             <h2 className="accordion-header" id="headingThree">
//                                                 <button className="accordion-button shadow-none blue-color  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                     Will you Sign an NDA?
//                                                 </button>
//                                             </h2>
//                                             <div className="accordion-collapse">
//                                                 <div className="accordion-body">
//                                                     Definitely. We are highly critical about the security of your data and once we enter an agreement; we willy duly sign a NDA to safekeep your data like we do with all our clients. There will be no compromise to your data security, whatsoever.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="mcsb-scrolltools">
//                                     <div className="mcsb-dragger-container">
//                                         <div className="mcsb-dragger">
//                                             <div className="mCSB_dragger_bar" style={{ lineHeight: '30px' }}></div>
//                                         </div>
//                                         <div className="mCSB-draggerRail"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <a href="#" className="secondary1-btn faq-mt-4">Ask to Expert</a>
//                     </div>

//                     <div className="faq-left">
//                         <div className="faq-left-container">
//                             <div className="faq-left-content">
//                                 <div className="mcsb-container">
//                                     <h3>Get Traffic Ticking With Our <br />Premium SEO Services</h3>
//                                     <p>  Give a boost that your brand needs with a top-notch SEO marketing partner. We are a full-service business that is being refined with time. We are working with the leading global brands across the world. Our services are tailored as per your business’s specific needs. ESEO’s holistic approach comprises collaboration among various teams and our SEO experts to bring in new and innovative ideas to develop our best-in-class services to give your brand a competitive edge in digital marketing. </p>
//                                     <p>Global SEO: Upscale the business’s reach, website traffic, and conversions to give your business international heights with us. </p>
//                                     <p>Local SEO: Get away with black-hat SEO providers &amp; be a leader in the localized market with us</p>
//                                     <p>National SEO: Our highly proficient SEO team has in-depth knowledge of the ongoing market trends and can make you a national leader in no time. </p>
//                                     <p>E-Commerce Marketing: Driving traffics to your web-store in no time with out of the box SEO strategy</p>
//                                     <p>Guest Posting: Boost up the organic traffic and get listed among the popular brands in the industry with niche relevant guest posts</p>
//                                     <p>Content Marketing: Get your business displayed with impeccable content and engage the audience with the right product information. </p>
//                                     <p>App Store Optimisation (ASO) Mobile App-marketing: Boost the download of your apps on the playstore with our unique mobile app marketing services</p>
//                                     <h3>We are the Industry Leaders</h3>
//                                     <p>16+ year experience: With the name ESEO, you arm your brand with 16+ years of digital marketing expertise and ground-level experience. </p>
//                                     <p>Strongest Portfolio with Proven results globally: Based on records, we feel immense proud in saying that ours is the most diverse &amp; strong service portfolio designed to add value to your business </p>
//                                     <p>Global Partners: We work with global brands to develop truly tailored partnerships to deliver clear value and realistic business benefits to them.</p>
//                                     <p>Endless Customer Support: We stand with you shoulder to shoulder to build your brand with 24*7 availability.  </p>
//                                     <p>Customer Satisfaction Rating: With our flawless service, we have become an ace SEO firm with the highest customer satisfaction rating among peers. </p>
//                                     <p>Clients from All Sectors &amp; Global Reach: Not just IT or Ecommerce, we are reshaping the digital marketing landscape of almost all sectors and industries around the world. </p>
//                                 </div>
//                             </div>

//                             <div className="mcsb-scrolltools">
//                                 <div className="mcsb-dragger-container">
//                                     <div className="mcsb-dragger">
//                                         <div className="mCSB_dragger_bar" style={{ lineHeight: '30px' }}></div>
//                                     </div>
//                                     <div className="mCSB-draggerRail"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Faq





















































import React, { useState, useEffect } from 'react';
// import $ from 'jquery';
// import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.css';
// import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import '../Styles/Faq.css';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // jquery=======================
  //  useEffect(() => {
  //   $("#faq-content-1").mCustomScrollbar({
  //     theme: "inset-3-dark"
  //   });
  // }, []);




  const faqItems = [
    {
      question: "Why Should I Go for SEO Services?",
      answer: "Living in a world where more than 80% users search for a product or service online, having a web presence has become indispensable. If your business gets first page rankings, this means your future customers bestow more trust and are likely to buy from you. At ESEO, our aim is to help you fetch top spots on search engines for your target keywords."
    },
    {
      question: "What’s the point of doing SEO when I am selling offline?",
      answer: "As mentioned before, it’s important to build trust with your audience before they become customers. Even if you have an offline presence, it’s essential to have a running website with all your features listed; if you are to attract attention. That’s where SEO comes into play. With our SEO services, we help you connect the road to more leads and recurring sales."
    },
    {
      question: "What Services are offered in SEO Package?",
      answer: "That completely depends on the current status of the website, the keywords you are trying to rank for among major factors. We will create a customized package depending on your requirements and the level of SEO required to propel your website to the top of search engine rankings. We are not a money minting SEO business, so you can expect complete transparency from our side."
    },
    {
      question: "Have You Delivered Results for My Industry in the Past?",
      answer: "Apart from the usual industries such as IT, Manufacturing, Retail and Pharma; our SEO experts have worked with challenging industries and delivered impeccable results that other SEO agencies deem impossible. We would be more than happy in discussing your requirements, no matter how difficult that might sound. We always encourage our clients to give a shot, and then we commit to deliver."
    },
    {
      question: "How Does Your Reporting Mechanism Look Like?",
      answer: "After having a discussion, we will be agreeing on certain goals based on which we will send you monthly reports to track the progress. Our reporting is quite simple and transparent and will give you a 360-degree view of how your target keywords are performing and how the entire SEO efforts are shaping up."
    },
    {
      question: "Can You Help Me with Local SEO?",
      answer: "Definitely. Local SEO is our forte and we have helped multiple local businesses acquire top positions on local search engines. We encourage you to discuss your local SEO needs in detail and we are more than happy to help."
    },
    {
      question: "How Soon Can We Expect Traffic and Rankings to Pour In?",
      answer: "It’s difficult to comment without understanding where your site stands at the moment and the industry you are operating in. SEO is a marathon and not a sprint. Moreover, certain industries and keywords take more time to rank than others. But, with consistent efforts, every mountain can be scaled. Typically, a duration of 6 months to 1 year is recommended to see visible results."
    },
    {
      question: "Why Should I Continue SEO After hitting the top spot on Google?",
      answer: "This is an area where even pro businesses falter. Even when you are on top of Google search results, you should continue your SEO efforts. There are always changes and fluctuations in search engine algorithms that means your rankings might slip. Therefore, we strongly recommend you to not discontinue your SEO efforts."
    },
    {
      question: "Do Your SEO Techniques Pose a Threat to My Website?",
      answer: "Not at all. Every SEO technique we deploy lies in the ambit of google and we neither do black hat nor grey hat SEO. We never encourage link spamming or building shady links to your site that do more harm than good to our SEO efforts. We believe in mutual win-win, so always steer clear of disapproved techniques."
    },
    {
      question: "Will you Sign an NDA?",
      answer: "Definitely. We are highly critical about the security of your data and once we enter an agreement; we willy duly sign a NDA to safekeep your data like we do with all our clients. There will be no compromise to your data security, whatsoever."
    }
  ];

  return (
    <section className='faq-section'>
      <div className="faq-cont faq-pr">
        <div className="faq-row faq-align">
          <div className="faq-right">
            <h2 className="faq-heading">Some of FAQ's</h2>
            <h3>To the innumerable questions &amp; queries, we have curated the right answers for you. </h3>
            <Scrollbars style={{ width: 'auto', height: '500px' }}>
              <div className="scroll-faq-accordion" id='faq-content-1'>
                <div className="mCustomScrollBox">
                  <div className="mcsb-container">
                    <div className="accordion" id="faqAccordion">
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

                  {/* <div className="mcsb-scrolltools">
                  <div className="mcsb-dragger-container">
                    <div className="mcsb-dragger">
                      <div className="mCSB_dragger_bar" style={{ lineHeight: '30px' }}></div>
                    </div>
                    <div className="mCSB-draggerRail"></div>
                  </div>
                </div> */}
                </div>
              </div>
            </Scrollbars>
            <a href="#" className="secondary1-btn faq-mt-4">Ask to Expert</a>
          </div>

          <div className="faq-left">
          {/* <Scrollbars style={{ width: '100%', height: '100%' }}> */}
            <div className="faq-left-container">
              {/* <Scrollbars style={{ width: 500, height: 500 }}> */}
              {/* <Scrollbars style={{ width: '100%', height: '100%' }}> */}
                <div className="faq-left-content">
                <Scrollbars style={{ width: '100%', height: '100%' }}>
                  <div className="mcsb-container">
                    <h3>Get Traffic Ticking With Our <br />Premium SEO Services</h3>
                    <p>  Give a boost that your brand needs with a top-notch SEO marketing partner. We are a full-service business that is being refined with time. We are working with the leading global brands across the world. Our services are tailored as per your business’s specific needs. ESEO’s holistic approach comprises collaboration among various teams and our SEO experts to bring in new and innovative ideas to develop our best-in-class services to give your brand a competitive edge in digital marketing. </p>
                    <p>Global SEO: Upscale the business’s reach, website traffic, and conversions to give your business international heights with us. </p>
                    <p>Local SEO: Get away with black-hat SEO providers &amp; be a leader in the localized market with us</p>
                    <p>National SEO: Our highly proficient SEO team has in-depth knowledge of the ongoing market trends and can make you a national leader in no time. </p>
                    <p>E-Commerce Marketing: Driving traffics to your web-store in no time with out of the box SEO strategy</p>
                    <p>Guest Posting: Boost up the organic traffic and get listed among the popular brands in the industry with niche relevant guest posts</p>
                    <p>Content Marketing: Get your business displayed with impeccable content and engage the audience with the right product information. </p>
                    <p>App Store Optimisation (ASO) Mobile App-marketing: Boost the download of your apps on the playstore with our unique mobile app marketing services</p>
                    <h3>We are the Industry Leaders</h3>
                    <p>16+ year experience: With the name ESEO, you arm your brand with 16+ years of digital marketing expertise and ground-level experience. </p>
                    <p>Strongest Portfolio with Proven results globally: Based on records, we feel immense proud in saying that ours is the most diverse &amp; strong service portfolio designed to add value to your business </p>
                    <p>Global Partners: We work with global brands to develop truly tailored partnerships to deliver clear value and realistic business benefits to them.</p>
                    <p>Endless Customer Support: We stand with you shoulder to shoulder to build your brand with 24*7 availability.  </p>
                    <p>Customer Satisfaction Rating: With our flawless service, we have become an ace SEO firm with the highest customer satisfaction rating among peers. </p>
                    <p>Clients from All Sectors &amp; Global Reach: Not just IT or Ecommerce, we are reshaping the digital marketing landscape of almost all sectors and industries around the world. </p>
                  </div>
                  </Scrollbars>
                </div>
              {/* </Scrollbars> */}

              {/* <div className="mcsb-scrolltools">
                <div className="mcsb-dragger-container">
                  <div className="mcsb-dragger">
                    <div className="mCSB_dragger_bar" style={{ lineHeight: '30px' }}></div>
                  </div>
                  <div className="mCSB-draggerRail"></div>
                </div>
              </div> */}
            </div>
            {/* </Scrollbars> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

