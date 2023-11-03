import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.left}>
          <div className={styles.heading}>
            SUSTAINABILITY
            <br />
            SIMPLIFIED

            <div className={styles.left_subheading}>
              Embark on your ESG Journey and stay ahead of the curve and measure to manage your sustainability outcomes.
            </div>
          </div>

          <div className={styles.left_button}>
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
            <div className={styles.right_count}>1. Regularity</div>
            <div className={styles.right_count}>2. Ratings</div>
            <div className={styles.right_count}>3. Reporting</div>
            <div className={styles.right_count}>4. Reputation</div>
          </div>
        </div>

      </div>

      {/* <div className={styles.green_box}>
        green
      </div> */}
    </>
  )
}

export default Hero