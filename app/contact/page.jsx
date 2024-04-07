import Image from 'next/image'
import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import SectionHeader from '../components/section-header/SectionHeader';
import styles from './contact.module.css';
import ContactForm from './form';
import ContactImage from '../assets/conect.jpg';
import ContactImageBg from '../assets/contact-bg.jpg';

const Contact = () => {
  return (
    <section className={`sectionStyles ${styles.sectionStyles}`}>
      <SectionHeader title="Let's Connect" subtitle="" />
      <div className={`container1 ${styles.container1}`}>
        {/* Image 100% */}
        <div className={styles.imageFull}>
          <article className={styles.image}>
            <Image src={ContactImageBg } alt="Let's Talk" />
          </article>
        </div>
      </div>

      <div className={`containerContact ${styles.contactForm}`}>
      <div className={`containerContact ${styles.contactFormWrapper}`}>
            <div className={styles.contactImage}>
            <Image src={ContactImage} alt="Contact Page" />
          </div>
         </div>
        <ContactForm />
         
      </div>

      <div className={styles.contactOptions}>
          <a href="mailto:majafranklin811@gmail.com" className={styles.contactOption} target="_blank" rel='noopener noreferrer'>
            <MdOutlineEmail className={styles.contactIcon} />
          </a>
          <a href="https://wa.me/+14158666345" className={styles.contactOption} target="_blank" rel='noopener noreferrer'>
            <BsWhatsapp className={styles.contactIcon} />
          </a>
      </div>

    </section>
  )
}

export default Contact;
