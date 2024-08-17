import React from 'react'
import SMHero from '../Components/SMHero'
import SMbrandpromotion from '../Components/SMbrandpromotion'
import SMExpandbusiness from '../Components/SMExpandbusiness'
import SMsmopartner from '../Components/SMsmopartner'
import SMSocialmedia from '../Components/SMSocialmedia'
import SMIndustryserve from '../Components/SMIndustryserve'
import SMFAQ from '../Components/SMFAQ'
import Blogsection from '../Components/Blogsection'
import Testimonials from '../Components/Testimonials'
import SMimprovesearch from '../Components/SMimprovesearch'
import Mapintegration from '../Components/Mapintegration'
import CareerGlobalbrands from '../Components/CareerGlobalbrands'

const Socialmedia = () => {
  return (
    <>
      <SMHero />
      <CareerGlobalbrands />
      <SMbrandpromotion />
      <SMExpandbusiness />
      <SMsmopartner />
      <SMSocialmedia />
      <SMIndustryserve paragraphText={`Business isn't one size fits all. Every industry requires a custom solution.<br /> Learn more about how we've helped businesses in your industry by clicking below.`} />
      <SMFAQ />
      <Blogsection />
      <Testimonials />
      <SMimprovesearch />
      <Mapintegration />
    </>
  )
}

export default Socialmedia
