// ScrollHandler.jsx
import { useEffect, useState } from 'react';
import styles from './navbar.module.css';

const ScrollHandler = ({ children, callback }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    callback(scrollPosition);
  }, [scrollPosition, callback]);

  return <div className={`${styles.scrollHandler} ${scrollPosition > 751 ? styles.scrolled : ''}`}>{children}</div>;
};

export default ScrollHandler;
