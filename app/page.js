import React from 'react'
import Header from './components/header/Header'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Faqs from './components/faqs/Faqs'

const page = () => {
  return (
    <>
      <Header/>
      <Services />
      <Testimonials/>
      <Faqs/>
    </>
  )
}

export default page