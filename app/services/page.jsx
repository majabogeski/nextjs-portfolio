import React from 'react';
import SectionHeader from '../components/section-header/SectionHeader';
import { data } from './servicesData';
import styles from './services.module.css';

import Card from '../components/card/Card';
import Image from 'next/image';
import CoachingServeces from '../assets/contact-bg.jpg';

const Page = () => {
  return (
    <section>
      <SectionHeader title="Holistic Approach" subtitle="" />
      <div className={styles.imageFull}>
        <article className={styles.image}>
          <Image src={CoachingServeces} alt='About Services' loading="lazy" />
        </article>
      </div>

      <div className={styles.coachingServices}>
        <p>Welcome to the journey of self-discovery and growth! As your life coach, I am committed to guiding you in rediscovering your purpose, whether it involves pursuing what truly matters to you or overcoming fears that may hinder your dreams. Together, we&apos;ll unlock and nurture your unique gifts, striving towards the fulfillment of your deepest aspirations. We&apos;ll set meaningful goals, tackle procrastination, and overcome self-doubt that might slow you down. By embracing a growth mindset and cultivating accountability, you&apos;ll stay focused, boost creativity, and remain motivated on your journey towards lasting fulfillment.</p>

        <p>Together, we&apos;ll embark on a holistic journey, unlocking deep healing on physical, emotional, and spiritual levels by tapping into the inner wisdom of your body and mind. Through transformative practices such as breathwork, somatic experiencing, meditation, mindfulness cultivation, and personalized self-care rituals, you&apos;ll acquire the tools to free yourself from accumulated stress, anxiety, and unresolved emotions.</p>
        
        <p>I&apos;ll guide you to maintain a connection to a state of well-being, ensuring that no matter what difficulties life throws your way, you can always connect with the part of yourself that remains serene and at ease. You&apos;ll discover how to fully embrace the present moment, rebalance your nervous system, and access deep relaxation, cultivating a deep sense of inner peace and vitality —ultimately enabling you to open fully to your Essential Nature.</p>
      </div>


      <div className={`container ${styles.container}`}>
        {data.map(({ id, icon, title, description }) => (
          <Card key={id} className={styles.service} icon={icon} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default Page;
