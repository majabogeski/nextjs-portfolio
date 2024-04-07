import React from 'react';
import Link from 'next/link';
import styles from './services.module.css';


const Services = () => {
  return (
    <section className={styles.services}>
      <div className={`container ${styles.servicesWrapper}`}>
        <Link href="/services" className={`btn ${styles.service}`}>
          <h4 className={styles.title}>Are you open and willing to embrace transformative change in all areas of your life?</h4>
        </Link>
     
        <Link href="/services" className={`btn ${styles.service}`}>
          <p className={styles.title}>I am committed to helping you shift your mindset and live your life&apos;s purpose by guiding you on a holistic journey — reawakening the profound wisdom within your body, nurturing the spiritual dimension of your being, and freeing you from the burdens of external pressures. You will become calm, confident, and led by your own inner power.
         </p>
        </Link>
      </div>
    </section>
  );
};

export default Services;
