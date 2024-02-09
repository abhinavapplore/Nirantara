import React from 'react'
import styles from './Service.module.css'

const Services = () => {
  return (
    <>
      <div className={styles.heading} id='service'>OUR SERVICES</div>

      <div className={styles.container}>

        <div className={styles.first_row}>
          <div className={styles.image_container}>
            <img src="./images/1.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/plant_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>Strengthening GOVERNANCE MECHANIMS</div>
              {/* <div className={styles.content_sub_heading}>description come here about</div> */}
            </div>
          </div>
          <div className={styles.image_container}>
            <img src="./images/2.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/foot_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>DOUBLE MATERIALITY ASSESSMENT</div>
              {/* <div className={styles.content_sub_heading}>description come here about</div> */}
            </div>
          </div>
          <div className={styles.image_container}>
            <img src="./images/3.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/plant_hand_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>MEASURING EMISSIONS</div>
              {/* <div className={styles.content_sub_heading}>description come here about</div> */}
            </div>
          </div>
        
          <div className={styles.image_container}>
            <img src="./images/4.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/foot_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>NEUTRALITY AND ESG ROADMAPS</div>
              {/* <div className={styles.content_sub_heading}>description come here about</div> */}
            </div>
          </div>
          <div className={styles.image_container}>
            <img src="./images/5.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/plant_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>ALIGNING SOCIAL GOALS</div>
              {/* <div className={styles.content_sub_heading}>description come here about</div> */}
            </div>
          </div>
          <div className={styles.image_container}>
            <img src="./images/6.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/foot_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>PERIODIC REPORTING</div>
              {/* <div className={styles.content_sub_heading}>description come here about</div> */}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Services