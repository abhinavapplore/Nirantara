import React from 'react'
import styles from './Service.module.css'

const Services = () => {
  return (
    <>
      <div className={styles.heading}>OUR SERVICES</div>

      <div className={styles.container}>

        <div className={styles.first_row}>
          <div className={styles.image_container}>
            <img src="./images/esg.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/plant_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>ESG ROADMAPS</div>
              <div className={styles.content_sub_heading}>description come here about</div>
            </div>
          </div>
          <div className={styles.image_container}>
            <img src="./images/esg.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/foot_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>CARBON NEUTRALITY PLANS</div>
              <div className={styles.content_sub_heading}>description come here about</div>
            </div>
          </div>
          <div className={styles.image_container}>
            <img src="./images/esg.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/plant_hand_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>PROCESS STREAMLINING FOR ESG</div>
              <div className={styles.content_sub_heading}>description come here about</div>
            </div>
          </div>
        </div>

        <div className={styles.first_row}>
          <div className={styles.image_container}>
            <img src="./images/esg.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/foot_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>strengthening governance mechanisms </div>
              <div className={styles.content_sub_heading}>description come here about</div>
            </div>
          </div>
          <div className={styles.image_container}>
            <img src="./images/esg.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/plant_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>DOUBLE MATERIALITY ASSESSMENT</div>
              <div className={styles.content_sub_heading}>description come here about</div>
            </div>
          </div>
          <div className={styles.image_container}>
            <img src="./images/esg.png" alt="" />
            <div className={styles.content}>
              <div className={styles.content_icon}>
                <img src="./images/foot_icon.svg" alt="" />
              </div>
              <div className={styles.content_heading}>MEASURING ESG PERFORMANCE</div>
              <div className={styles.content_sub_heading}>description come here about</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Services