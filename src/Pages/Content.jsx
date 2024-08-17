import React from 'react'
import CMHero from '../Components/CMHero'
import CMDigitalcontent from '../Components/CMDigitalcontent'
import CMSimplesteps from '../Components/CMSimplesteps'
import CMCreate from '../Components/CMCreate'
import CMBuildbusiness from '../Components/CMBuildbusiness'
import CMIndustryserve from '../Components/CMIndustryserve'
import CMAccord from '../Components/CMAccord'
import Blogsection from '../Components/Blogsection'
import Testimonials from '../Components/Testimonials'
import SeoImprovesearch from '../Components/SeoImprovesearch'
import Mapintegration from '../Components/Mapintegration'
import CareerGlobalbrands from '../Components/CareerGlobalbrands'

const Content = () => {
  return (
    <>
      <CMHero />
      <CareerGlobalbrands />
      <CMDigitalcontent />
      <CMSimplesteps />
      <CMCreate />
      <CMBuildbusiness />
      <CMIndustryserve />
      <CMAccord />
      <Blogsection />
      <Testimonials />
      <SeoImprovesearch seoHeading={"Improve content visibility on web"} />
      <Mapintegration />
    </>
  )
}

export default Content
