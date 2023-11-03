import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Vision from '../components/Vision/Vision'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Services from '../components/Services/Services'
import Values from '../components/Values/Values'
import Testimonal from '../components/Testimonial/Testimonal'
import Hero from '../components/Hero/Hero'
import WhoWeAre from '@/components/WhoWeAre/WhoWeAre'
import OurApproach from '@/components/OurApproach/OurApproach'

const HomeScreen = () => {
  return (
    <>
        <Header />
        <Hero/>
        <WhoWeAre />
        <Vision />
        <OurApproach />
        <Services />
        <Values />
        {/* <Testimonal /> */}
        <NewsLetter />
        <Footer />
    </>
  )
}

export default HomeScreen