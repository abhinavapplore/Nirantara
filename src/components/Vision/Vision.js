import React from 'react'
import styles from './Visionn.module.css';

const Vision = () => {
  return (
    <>
      <div className={styles.container} id='vision'>
        <div className={styles.left}>
          <div className={styles.left_main}>
            <div className={styles.heading}>Our Vision</div>
            <div className={styles.sub_heading}>
              Our intent is to strengthen organizations which are pursuing the ESG/sustainability vision, to help them progressively achieve sustainability goals as well as regulatory compliance in a continuous manner.
            </div>
            <div className={styles.sub_heading}>
              For organizations pursuing sustainability/ESG vision who need value adding engagements across levels to achieve the goals, we offer strategic insight, operational transformation, and last mile/digital support in implementation through our wide range portfolio of futuristic services.
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="../../images/workers.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Vision