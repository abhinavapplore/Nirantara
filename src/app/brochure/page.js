"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import styles from './Slider.module.css';
// import pdf from './nev-brochure.pdf';


const page = () => {

    return (
        <>
            <div className={styles.slider}>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop
                    showArrows
                >
                    <div className={styles.slide}>
                        <img src="./images/bg-01.png" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src="./images/bg-02.png" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src="./images/bg-03.png" alt="" />
                    </div>
                </Carousel>

                <a href='./b.pdf' download="Brochure.pdf">
                    <div className={styles.button}>
                        Download Brochure
                    </div>
                </a>
            </div>
        </>

    )
}

export default page