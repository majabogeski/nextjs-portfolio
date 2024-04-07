// Navbar.jsx

'use client';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import ScrollHandler from './ScrollHandler';
import { FaBars } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import { GoMoon, GoSun } from 'react-icons/go';
import { usePathname } from 'next/navigation';


import { ThemeContext } from '@/app/context/themeContext';
import styles from './navbar.module.css';

const data = [
  { id: 1, link: '/', caption: 'Home' },
  { id: 2, link: '/about', caption: 'About' },
  { id: 3, link: '/services', caption: 'Coaching' },
  { id: 4, link: '/yoga', caption: 'Yoga' },
  { id: 5, link: '/contact', caption: 'Contact' },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useContext(ThemeContext);

  // Check if user is on screen larger than 600px. If so then show nav menu
  useEffect(() => {
    if (window.innerWidth > 600) {
      setNavOpen(true);
    }
  }, [navOpen]);

  // Close dropdown when on small screens
  const closeNavHandler = () => {
    if (window.innerWidth <= 600) {
      setNavOpen(false);
    }
  };

  // Function to change theme
  // const changeThemeHandler = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };

  const handleScroll = (scrollPosition) => {
    // Do something with the scroll position
    // console.log('Scroll position:', scrollPosition);
  };

  // const isContactPage = pathname === '/contact';

  return (
    <ScrollHandler callback={handleScroll}>
      {/* <nav className={`${styles.nav} ${isContactPage ? styles.solidBackground : ''}`}> */}
      <nav className={`${styles.nav}`}>
        <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.navLogo} onClick={closeNavHandler}>
          <h5>Maja</h5>
        </Link>

          {/* <div className={styles.navLogo} onClick={closeNavHandler}>
            
            <Image src={logoImage} alt="Maja Logo" width={100} height={40} />
          </div> */}
   
          {navOpen && (
            <ul className={styles.navItems}>
              {data.map(({ id, link, caption }) => (
                <li key={id}>
                  <Link
                    href={link}
                    onClick={closeNavHandler}
                    className={pathname === link ? 'active' : ''}
                  >
                    {caption}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className={styles.navBtns}>
            {/* <button className={styles.themeBtn} onClick={changeThemeHandler}>
              {theme === 'light' ? <GoMoon /> : <GoSun />}
            </button> */}
            <button
              className={styles.navBtn}
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <AiOutlineClose /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>
    </ScrollHandler>
  );
};

export default Navbar;
