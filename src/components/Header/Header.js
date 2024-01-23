import React, { useState } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import Hamburger from 'hamburger-react'




const Header = () => {

  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => {
    setOpen(!open); // Toggle the state when the hamburger icon is clicked
  };

  return (
    <>
      <div className={styles.container}>

        <div className={styles.logo}>
          <a href="/">
          <img src="/nirantraLogo.svg" alt="nirantara logo" />
          </a>
        </div>

        <div className={styles.links}>
          <a href="#about"><div className={styles.link}>About us</div></a>
          <a href="#vision"><div className={styles.link}>our vision</div></a>

          {/* discuss with vaibhav fuke need for ngnix */}
          <div className={styles.link}>
            <Link href='/brochure'>
              <button>BROCHURE</button>
            </Link>
          </div>

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
            <img src="/nirantraLogo.svg" alt="nirantara logo" />
            </a>
          </div>
          <button onClick={toggleMobileMenu}>
            <div className={styles.right_mobile}>
              <Hamburger toggled={open} toggle={setOpen} />
            </div>
          </button>
        </div>
        {
          open &&
          <>
            <div div className={styles.bottom} onClick={toggleMobileMenu}>
              <a href="#aboutmobile"><div className={styles.mobile_link}>About us</div></a>
              <a href="#vision"><div className={styles.mobile_link}>our vision</div></a>
              <Link href='/brochure'>
                <div className={styles.mobile_link}>
                  <button>BROCHURE</button>
                </div>
              </Link>
              <a href="#service"><div className={styles.mobile_link}>services</div></a>
              <a href="#value"><div className={styles.mobile_link}>our values</div></a>
              <a href="#newsletter"><div className={styles.mobile_link}>Contact Us</div></a>
            </div>
          </>

        }
      </div>
    </>
  )
}

export default Header