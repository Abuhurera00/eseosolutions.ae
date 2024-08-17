import React from 'react'
import MAHero from '../Components/MAHero'
import MAmobiledata from '../Components/MAmobiledata'
import MAOptimizationwork from '../Components/MAOptimizationwork'
import MAapplicationmobile from '../Components/MAapplicationmobile'
import MAbenefitsofaso from '../Components/MAbenefitsofaso'
import SMIndustryserve from '../Components/SMIndustryserve'
import MAAccord from '../Components/MAAccord'
import Blogsection from '../Components/Blogsection'
import Testimonials from '../Components/Testimonials'
import SeoImprovesearch from '../Components/SeoImprovesearch'
import Mapintegration from '../Components/Mapintegration'
import CareerGlobalbrands from '../Components/CareerGlobalbrands'

const Mobileapp = () => {
  return (
    <>
      <MAHero/>
      <CareerGlobalbrands />
      <MAmobiledata />
      <MAOptimizationwork />
      <MAapplicationmobile />
      <MAbenefitsofaso />
      <SMIndustryserve paragraphText={`A perfect combination of ideation, strategic marketing, and innovation for every industry.<br /> We enhance quality, minimize risk, and promote transparency.`} />
      <MAAccord />
      <Blogsection />
      <Testimonials />
      <SeoImprovesearch seoHeading={"Improve your visibility on app store"} />
      <Mapintegration />
    </>
  )
}

export default Mobileapp
