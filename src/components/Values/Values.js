import React from 'react'
import styles from './Value.module.css';

const Values = () => {
  return (
    <>
      <div className={styles.container} id='value'>
        <div className={styles.left}>
          <div className={styles.heading}>Our Values</div>
          {/* <div className={styles.sub_heading}>
            Our intent is to strengthen organizations which are pursuing the ESG/sustainability vision, to help them progressively achieve sustainability goals as well as regulatory compliance in a continuous manner.
          </div>
          <div className={styles.sub_heading}>
            For organizations pursuing sustainability/ESG vision who need value adding engagements across levels to achieve the goals, we offer strategic insight, operational transformation, and last mile/digital support in implementation through our wide range portfolio of futuristic services.
          </div> */}
        </div>
        <div className={styles.right}>
          <div className={styles.right_links}>1 FUTURE FORWARD</div>
          <div className={styles.right_links}>2 INCLUSIVENESS</div>
          <div className={styles.right_links}>3 BALANCE</div>
          <div className={styles.right_links}>4 FLEXIBILITY</div>
          <div className={styles.right_links}>5 TRANSPARENCY</div>
          <div className={styles.right_links}>6 ADAPTATION</div>
          <div className={styles.right_links}>7 RELIABILITY</div>
        </div>
      </div>
    </>
  )
}

export default Values