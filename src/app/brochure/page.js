"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import styles from './Slider.module.css';
// import pdf from './nev-brochure.pdf';


const page = () => {

    const images = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg',

        // Add more image URLs as needed
    ];

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
                        <img src="./images/bg-1.jpg" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src="./images/bg-2.jpg" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src="./images/bg-3.jpg" alt="" />
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