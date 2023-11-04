import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.logo}>
          <a href="/">
            <img src="./images/logo.svg" alt="" />
          </a>
        </div>

        <div className={styles.links}>
          <a href="#about"><div className={styles.link}>About us</div></a>
          <a href="#vision"><div className={styles.link}>our vision</div></a>
          <a href="#service"><div className={styles.link}>services</div></a>
          <a href="#value"><div className={styles.link}>our values</div></a>
        </div>

        <a href="#newsletter">
          <div className={styles.button}>
            contact us
          </div>
        </a>
      </div>


      {/* mobile view */}
      <div className={styles.mobile_container}>

        <div className={styles.top}>
          <div className={styles.left_mobile}>
            <a href="/">
              <img src="./images/logo.svg" alt="" />
            </a>
          </div>
          <a href="#newsletter">
            <div className={styles.right_mobile}>
              contact us
            </div>
          </a>
        </div>

        <div className={styles.bottom}>
          <a href="#aboutmobile"><div className={styles.mobile_link}>About us</div></a>
          <a href="#vision"><div className={styles.mobile_link}>our vision</div></a>
          <a href="#service"><div className={styles.mobile_link}>services</div></a>
          <a href="#value"><div className={styles.mobile_link}>our values</div></a>
        </div>
      </div>
    </>
  )
}

export default Header