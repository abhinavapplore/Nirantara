import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="./images/logo.svg" alt="" />
        </div>
        <div className={styles.links}>
          <a href="#section1"><div className={styles.link}>About us</div></a>
          <a href="#section2"><div className={styles.link}>our vision</div></a>
          <a href="#section3"><div className={styles.link}>services</div></a>
          <a href="#section4"><div className={styles.link}>our values</div></a>
        </div>
        <div className={styles.button}>
          contact us
        </div>
      </div>


      {/* mobile view */}
      <div className={styles.mobile_container}>

        <div className={styles.top}>
          <div className={styles.left_mobile}>
            <img src="./images/logo.svg" alt="" />
          </div>
          <div className={styles.right_mobile}>
            contact us
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.mobile_link}>About us</div>
          <div className={styles.mobile_link}>vision</div>
          <div className={styles.mobile_link}>service</div>
          <div className={styles.mobile_link}>values</div>
        </div>
      </div>
    </>
  )
}

export default Header