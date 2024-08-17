// import React from 'react'
// import "../Styles/Mediacoverage.css";
// import siliconindia from "../assets/siliconindia.png"
// import hindustantimes from "../assets/hindustantimes.png"
// import thehindulogo from "../assets/thehindulogo.png"
// import thefreeexpress from "../assets/thefreeexpress.png"
// import crnlogo from "../assets/crnlogo.png"
// import yourstory from "../assets/yourstory.png"

// const Mediacoverage = () => {
//   return (
//     <section className='coverage-sect'>
//       <div className="coverage-container">
//         <h2 className="coverage-heading">Some of Media Coverage</h2>
//         <div className="coverage-item">
//             <img src={siliconindia} alt="siliconindia" className='coverage-img' />
//         </div>
//         <div className="coverage-item">
//             <img src={hindustantimes} alt="hindustantimes" className='coverage-img' />
//         </div>
//         <div className="coverage-item">
//             <img src={thehindulogo} alt="thehindulogo" className='coverage-img' />
//         </div>
//         <div className="coverage-item">
//             <img src={thefreeexpress} alt="thefreeexpress" className='coverage-img' />
//         </div>
//         <div className="coverage-item">
//             <img src={crnlogo} alt="crnlogo" className='coverage-img' />
//         </div>
//         <div className="coverage-item">
//             <img src={yourstory} alt="yourstory" className='coverage-img' />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Mediacoverage













import React from 'react';
import "../Styles/Mediacoverage.css";
import siliconindia from "../assets/siliconindia.png";
import hindustantimes from "../assets/hindustantimes.png";
import thehindulogo from "../assets/thehindulogo.png";
import thefreeexpress from "../assets/thefreeexpress.png";
import crnlogo from "../assets/crnlogo.png";
import yourstory from "../assets/yourstory.png";

const mediaImages = [
  { src: siliconindia, alt: "siliconindia" },
  { src: hindustantimes, alt: "hindustantimes" },
  { src: thehindulogo, alt: "thehindulogo" },
  { src: thefreeexpress, alt: "thefreeexpress" },
  { src: crnlogo, alt: "crnlogo" },
  { src: yourstory, alt: "yourstory" }
];

const Mediacoverage = () => {
  return (
    <section className='coverage-sect'>
      <div className="coverage-container">
        <h2 className="coverage-heading">Some of Media Coverage</h2>
        {mediaImages.map((image, index) => (
          <div key={index} className="coverage-item">
            <img src={image.src} alt={image.alt} className='coverage-img' />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mediacoverage;
