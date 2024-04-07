import React from 'react'
import { data } from './faqsData'
import FaqItem from './FaqItem'
import styles from './faqs.module.css'

const Faqs = () => {
  return (
    <section className={styles.section}>
      <h2>Frequently Asked Questions</h2>
      <p>Have more questions? I&apos;m just a message away!</p>
      <div className={`container ${styles.container}`}>
        {data.map(({ id, title, description }) => <FaqItem key={id} title={title} desc={description} />)}
      </div>
    </section>
  )
}

export default Faqs
