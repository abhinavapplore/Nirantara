import React from 'react'
import styles from './Testimonial.module.css';
// import boy from '../../images/boy.svg';
// import man from '../../images/man.svg'
// import woman from '../../images/woman.svg';

const Testimonal = () => {
  return (
    <>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <img src='./images/boy.svg' alt="" />
          <div className={styles.content}>
            <div className={styles.content_heading}>“TESTIMONIAL</div>
            <div className={styles.content_sub_heading}>
              For organizations pursuing sustainability/ESG vision who need value adding engagements across levels to achieve the goals, we offer strategic insight, operational transformation, and last mile/digital support in implementation through our wide range portfolio of futuristic services.
            </div>
            <div className={styles.content_button}>Read More</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.top}>
            <img src='./images/woman.svg' alt="" />
          </div>
          <div className={styles.bottom}>
          <img src='./images/man.svg' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonal