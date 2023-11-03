import React from 'react'
import styles from './NewsLetter.module.css';


const NewsLetter = () => {

  // const handlSubmit = () => {
  //   e.preventDefault();
  //   console.log('hi.. button clicked');
  // }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        sign up & stay informed.
      </div>
      <div className={styles.right}>
        <form>
          <input
            type="text"
            placeholder='Enter your Email Address'
          />
          <button className={styles.button}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter