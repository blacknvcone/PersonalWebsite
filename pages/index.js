import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components
import Header from '../containers/common/header'
import BannerSection from '../components/resume/banner'
import AboutSection from '../components/resume/about'
import ServiceSection from '../components/resume/services'
import Section from '../components/resume/section';
import CounterSection from '../components/resume/counter'
import ScheduleSection from '../components/resume/schedule'
import SubscribeSection from '../components/resume/subscribe'
import FooterSection from '../components/resume/footer'

const Resume = () => {

  useEffect(() => {
    document.body.style.setProperty('--primary', '#1f232c')
    document.body.style.setProperty('--secondary', '#676767')
    document.body.style.setProperty('--light', '#000')
    document.body.style.setProperty('--dark', '#000')
  })

  return (
    <div>
      <Head>
        <title>Raven Studio </title>
      </Head>

      <Header className="dark" />

      <BannerSection />

      <AboutSection />

      <ServiceSection />

      <Section />

      <CounterSection />

      <ScheduleSection />

      <SubscribeSection />

      <FooterSection />

    </div>
  )
}

export default Resume;