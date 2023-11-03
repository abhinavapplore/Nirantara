import React from 'react'
import styles from './OurApproach.module.css';


const OurApproach = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>Our Approach</div>

                <div className={styles.main_container}>

                    <div className={styles.box}>
                        <div className={styles.box_img}>
                            <img src='./images/bulb.svg' alt="" />
                        </div>
                        <div className={styles.box_heading}>Insight</div>
                        <div className={styles.box_sub_heading}>Thought partnership & strategic insight. Thought leadership and strategic insight.</div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.box_img}>
                            <img src='./images/process.svg' alt="" />
                        </div>
                        <div className={styles.box_heading}>Process</div>
                        <div className={styles.box_sub_heading}>Deep dive into processes for adaptation increased efficiencies, savings and customization.</div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.box_img}>
                            <img src='./images/support.svg' alt="" />
                        </div>
                        <div className={styles.box_heading}>Support</div>
                        <div className={styles.box_sub_heading}>Last mile execution support Monitoring impacts and reporting.</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurApproach