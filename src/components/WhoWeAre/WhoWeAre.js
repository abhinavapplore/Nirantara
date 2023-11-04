import React from 'react'
import styles from './WhoWeAre.module.css';

const WhoWeAre = () => {
    return (
        <>
            <div className={styles.container} >
                <div className={styles.top_box}></div>

                <div className={styles.main_container} >
                    <div className={styles.left}>
                        <img src="./images/indianhand.svg" alt="" />
                    </div>
                    <div className={styles.right} >
                        <div className={styles.right_main}>
                            <div className={styles.heading}>INTRODUCTION</div>
                            <div className={styles.sub_heading}>
                                Nirantara offers the much-needed empowerment in sustainability thinking, strategy and practice. Sustainability/ESG agendas are growing strong across the world today, and at the same time, presenting organizations with a pressing set of challenges as well as opportunities, as they aspire for future leadership.
                            </div>
                            <div className={styles.sub_heading}>
                                Organizations across sectors and geographies need stronger support now than ever before at various levels, to take forward their vision, goals, and targets to grow and sustain leadership.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.mobile_container} >
                    <div className={styles.left} >
                        <img src="./images/indianhand.svg" alt="" />
                    </div>
                    
                    <div className={styles.right} id='aboutmobile'>
                        <div className={styles.right_main} >
                            <div className={styles.heading}>INTRODUCTION</div>
                            <div className={styles.sub_heading}>
                                Nirantara offers the much-needed empowerment in sustainability thinking, strategy and practice. Sustainability/ESG agendas are growing strong across the world today, and at the same time, presenting organizations with a pressing set of challenges as well as opportunities, as they aspire for future leadership.
                            </div>
                            <div className={styles.sub_heading}>
                                Organizations across sectors and geographies need stronger support now than ever before at various levels, to take forward their vision, goals, and targets to grow and sustain leadership.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default WhoWeAre