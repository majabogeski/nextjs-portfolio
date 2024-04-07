import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionHeader from '../components/section-header/SectionHeader'
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import AboutImageBg from '../assets/contact-bg.jpg'
import AboutImage from '../assets/PhotoRetouch.jpg'
import styles from './about.module.css'

const Page = () => {
  return (
    <section>
      <SectionHeader className="aboutSectionHeader" title="Welcome! I&apos;m Maja, pronounced &apos;Maya&apos;" subtitle="" />
      <div className={`container1 ${styles.container1}`}>
        {/* Image 100% */}
        <div className={styles.imageFull}>
          <article className={styles.image}>
            <Image src={AboutImageBg} alt='About Image Maja' />
          </article>
        </div>
      </div>

      <div className={`container ${styles.container}`}>
          <div className={styles.aboutImage}>
                <Image src={AboutImage} alt="About Page" />
          </div>
          <div className={styles.aboutCopy}>
          <article className={styles.aboutContent}>
          <h3>Your Life + Spiritual Coach</h3>
           
            <p>As a coach, I provide a safe and non-judgmental space for my clients to explore their thoughts and emotions, reconnecting them with the profound wisdom within their body and mind. My approach combines intuitive understanding with practical strategies, integrating mindfulness techniques to empower individuals to break free from limiting beliefs and unlock their full potential, cultivating inner peace, and living a life aligned with their deepest values.</p>
            <h3>I&apos;m dedicated to helping you with</h3>
            <p>I specialize in helping individuals who feel trapped in their quest to find purpose, struggling with self-doubt, and burdened by stress and anxiety. I will guide you to discover clarity, purpose, fulfillment, and inner peace. Whether you&apos;re navigating major life transitions, striving to overcome challenges or achieve long-held goals, or simply seeking to enhance your overall well-being, I&apos;m dedicated to supporting you every step of the journey.</p>
            <p>Through our coaching sessions, we&apos;ll explore mindfulness practices, set achievable goals, and develop actionable plans to help you unlock your full potential. Together, we&apos;ll cultivate a sense of balance, resilience, and self-compassion, allowing you to navigate life&apos;s challenges with greater ease and confidence. Whether you&apos;re seeking to find clarity in your career, find purpose, improve your relationships, or deepen your connection with yourself, I&apos;m here to provide the support and guidance you need to thrive. Let&apos;s embark on this journey of self-discovery and growth together!</p>
            <h3>Why I coach?</h3>
          <p>Coaching is my calling, born from my deeply personal voyage through life&apos;s trials—enduring periods of excruciating pain, wrestling with overwhelming anxiety, feeling lost and confused in a sea of uncertainty, grappling with debilitating low self-esteem, and constantly burdened by relentless self-doubt. In moments of crisis, I had a profound awakening, sparking my transition from agony to liberation.</p>
          <p>Diving into meditation, breathwork, somatic practices, and various therapies, along with yoga, life coaching, spiritual guidance, reading self-help and spiritual books, and continuously attending workshops... I experienced a profound transformation. Now, I navigate life&apos;s challenges and uncertainties with calm resilience, equipped with a diverse range of tools. I&apos;ve uncovered my true potential and am living a fulfilling life aligned with my deepest values.</p>
          <p>Now, I&apos;m driven by a deep desire to empower others. My goal is to make a meaningful impact, helping individuals overcome obstacles, tap into their inner strength, and create lasting positive change. Each coaching session is a chance for me to inspire, uplift, and guide others towards greater happiness and fulfillment.</p>
          </article>
          <div className={styles.headerCta}>
            <Link href="/contact" className='btn primary'>Book Free Call</Link>
          </div>
        
       </div>
     
      </div>
    </section>
  )
}

export default Page
