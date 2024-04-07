"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import styles from './footer.module.css'

const data = [
  {id: 1, link: '/', caption: 'Home'},
  {id: 2, link: '/about', caption: 'About'},
  {id: 3, link: '/services', caption: 'Coaching'},
  {id: 4, link: '/portfolio', caption: 'Yoga Practices'},
  {id: 5, link: '/contact', caption: 'Contact'}
]


const Footer = () => {
  const pathname = usePathname;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
      <Link href="/" className={styles.footerLogo} >Maja B</Link>
        <ul className={styles.footerNavItems}>
          {
            data.map(({id, link, caption}) => <li key={id}>
              <Link href={link} className={pathname === link ? "active" : ""}>{caption}</Link>
            </li>)
          }
        </ul>
      </div>
      <small className={styles.footerCopyright}>&copy; 2024 Maja Coaching. All Rights Reserved.</small>
    </footer>
  )
}

export default Footer