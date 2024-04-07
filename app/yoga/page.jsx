"use client"
import React from 'react';
import ResponsiveImage from '../components/responsiveimg/responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './yoga.module.css';
import Link from 'next/link'
import Yoga1 from '../assets/yoga1.jpg';
import Yoga2 from '../assets/yoga2.jpg';
import Yoga3 from '../assets/yoga3.jpg';
import Yoga4 from '../assets/yoga4.jpg';
import Yoga1mob from '../assets/yoga1mob.jpg';
import Yoga2mob from '../assets/yoga2mob.jpg?v=1';
import Yoga3mob from '../assets/yoga3mob.jpg?v=1';
import Yoga4mob from '../assets/yoga4mob.jpg?v=1';

import YogaPark from '../assets/yoga_park_image.jpg';
import YogaKula from '../assets/yoga_kula_image.jpg';
import YogaPrivate from '../assets/YogaPrivate.jpg';
//import SwiperCore, { Navigation } from 'swiper';
import SwiperCore, { Navigation } from 'swiper/core';


SwiperCore.use([Navigation]);

const CarouselComponent = () => {
  const swiperRef = React.useRef(null);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div>
      <div className={styles.carouselContainer}>
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className={styles.swiperContainer}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <ResponsiveImage
              desktopSrc={Yoga1}
              mobileSrc={Yoga1mob}
              alt="Yoga Project"
              desktopWidth={1920}
              mobileWidth={640}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <ResponsiveImage
              desktopSrc={Yoga2}
              mobileSrc={Yoga2mob}
              alt="Yoga Project"
              desktopWidth={1920}
              mobileWidth={640}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <ResponsiveImage
              desktopSrc={Yoga3}
              mobileSrc={Yoga3mob}
              alt="Yoga Project"
              desktopWidth={1920}
              mobileWidth={640}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <ResponsiveImage
              desktopSrc={Yoga4}
              mobileSrc={Yoga4mob}
              alt="Yoga Project"
              desktopWidth={1920}
              mobileWidth={640}
            />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev" onClick={slidePrev} style={{ color: 'white' }}></div>
        <div className="swiper-button-next" onClick={slideNext} style={{ color: 'white' }}></div>
      </div>
      {/* Display YogaProjects */}
      <div className={styles.yogaProjectsContainer}>
        <div className={styles.yogaProject}>
          <div className={styles.imageContainer}>
            <ResponsiveImage
              desktopSrc={YogaPark}
              mobileSrc={YogaPark}
              alt="Yoga Park Image"
              desktopWidth={1920}
              mobileWidth={640}
            />
          </div>
          <div className={styles.projectDetails}>
            <p className={styles.projectName}>Park Family Yoga</p>
            <p className={styles.projectLocation}>
              <a href="https://www.google.com/maps?q=15+Harbor+View+Dr,+Richmond,+CA+94804" target="_blank" rel="noopener noreferrer">
                Barbara and Jay Playground
              </a>
              <br />
              Sundays 11 am (when weather permits) <br />
              <span className={styles.donation}> <i>(Suggested donation: $5-$20)</i> </span>
            </p>
          </div>
        </div>
        <div className={styles.yogaProject}>
          <div className={styles.imageContainer}>
            <ResponsiveImage
              desktopSrc={YogaKula}
              mobileSrc={YogaKula}
              alt="Yoga Kula Image"
              desktopWidth={1920}
              mobileWidth={640}
            />
          </div>
          <div className={styles.projectDetails}>
            <p className={styles.projectName}>Teaching at YogaKula</p>
            <p className={styles.projectLocation}>
              <a href="https://www.yogakula.com/schedule" target="_blank" rel="noopener noreferrer">
                YogaKula Studio
              </a>
              <br />
              April 10, 7:15 pm
            </p>
          </div>
        </div>
        <div className={styles.yogaProject}>
          <div className={styles.imageContainer}>
            <ResponsiveImage
              desktopSrc={YogaPrivate}
              mobileSrc={YogaPrivate}
              alt="Private Yoga Image"
              desktopWidth={1920}
              mobileWidth={640}
            />
          </div>
          <div className={styles.projectDetails}>
            <p className={styles.projectName}>Private Yoga Sessions</p>
            <p className={styles.projectLocation}>
              Location TBD
            </p>
          </div>
        </div>
      </div>
      <div className={styles.headerCta}>
        <Link href="/contact" className='btn primary'>Get in Touch</Link>
      </div>
    </div>
  );
};

export default CarouselComponent;
