import React from 'react'
import styles from './Footer.module.css'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* TOP */}
      <div className={styles.left}>
        <div className={styles.footer_logo}>
          <img src='./images/footer_logo.svg' alt="footerLogo" />
        </div>
        <div className={styles.footer_links}>
          <div className={styles.link}>About Us</div>
          <div className={styles.link}>Contact Us</div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.left}>
        <div className={styles.footer_subline}>
          @2023 Nirantara Ecoventures Private Limited
        </div>
        <div className={styles.footer_icons}>

          <div className={styles.icon}><BsTwitter /></div>
          <div className={styles.icon}><BsFacebook /></div>
          <div className={styles.icon}><BsLinkedin /></div>
          <a href="https://www.instagram.com/nirantara_ecoventures/?igshid=MXBhbm1oNjh5c3VjYg%3D%3D">
            <div className={styles.icon}><BsInstagram /></div>
          </a>
          <div className={styles.icon}><BsYoutube /></div>
        </div>
      </div>

    </div>
  )
}

export default Footer