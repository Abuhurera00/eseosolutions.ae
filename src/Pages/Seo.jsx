import React from 'react'
import SeoHero from '../Components/SeoHero'
import Globalbrands from '../Components/Globalbrands'
import SeoApproach from '../Components/SeoApproach'
import SeoServices from '../Components/SeoServices'
import FreeSeoAudit from '../Components/FreeSeoAudit'
import SeoAgency from '../Components/SeoAgency'
import Partner from '../Components/Partner'
import Industriesweserve from '../Components/Industriesweserve'
import Letstalk from '../Components/Letstalk'
import Clientresult from '../Components/Clientresult'
import Faq from '../Components/Faq'
import Blogsection from '../Components/Blogsection'
import Testimonials from '../Components/Testimonials'
import SeoImprovesearch from '../Components/SeoImprovesearch'
import Mapintegration from '../Components/Mapintegration'

const Seo = () => {
  return (
    <>
      <SeoHero />
      <Globalbrands />
      <SeoApproach />
      <SeoServices />
      <FreeSeoAudit />
      <SeoAgency />
      <Partner />
      <Industriesweserve />
      <Letstalk />
      <Clientresult />
      <Faq />
      <Blogsection />
      <Testimonials />
      <SeoImprovesearch seoHeading={"Would you like to increase your ranking now?"} />
      <Mapintegration />
    </>
  )
}

export default Seo
