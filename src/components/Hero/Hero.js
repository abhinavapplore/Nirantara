import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.left}>
          <div className={styles.heading}>
            SUSTAINING
            <br />
            SUSTAINABILITY

            <div className={styles.left_subheading}>
              Embark on your ESG Journey and stay ahead of the curve and measure to manage your sustainability outcomes.
            </div>
          </div>

          <div className={styles.left_button} id='about'>
            LEARN MORE
          </div>
        </div>


        <div className={styles.right}>
          <div className={styles.right_main}>
            <div className={styles.right_heading}>
              Sustainability
              <br />
              Outcome
            </div>
            <div className={styles.right_count}>1.
              <span style={{ color: "grey" }}>Regularity</span>
            </div>
            <div className={styles.right_count}>2.
              <span style={{ color: "grey" }}>Ratings</span>
            </div>
            <div className={styles.right_count}>3.
              <span style={{ color: "grey" }}>Reporting</span>
            </div>
            <div className={styles.right_count}>4.
              <span style={{ color: "grey" }}>Reputation</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero