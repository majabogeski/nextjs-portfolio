import React from 'react';
import ResponsiveImage from '../responsiveimg/responsive';
import styles from './header.module.css';
import ImageHPDesk from '../../assets/beach2.jpg';
import ImageHP1Mob from '../../assets/MobHP.jpg';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.imageContainer}>
        <ResponsiveImage
          desktopSrc={ImageHPDesk}
          mobileSrc={ImageHP1Mob}
          alt="Image"
        />
      </div>
      <div className={styles.headerLeft}>
        <header className={`container ${styles.header}`}>
          <h1>All that you seek is within you <br />
          <span className={styles.braveText}>Be brave enough to let it</span>
          </h1>
          <span className={styles.styleShine}>Shine</span>
        </header>
      </div>
    </div>
  );
}

export default Header;
