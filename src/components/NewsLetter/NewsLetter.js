import React, { useState } from 'react'
import styles from './NewsLetter.module.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const backendUrl = 'https://nirantari-backend.vercel.app/subscriber'
  // const backendUrl = 'http://localhost:9000/subscriber'  

  const handleSubmit = async(e) => {
    e.preventDefault();

  try {
    const response = await axios.post(backendUrl, { email });
    console.log('Subscription successful:', response.data);
    toast.success('Subscription successful', {
      position: 'top-right',
      autoClose: 3000, 
    });
    setEmail('');
  } catch (error) {
    console.error('Subscription failed:', error.message);
    toast.error('Subscription failed. Please try again later.', {
      position: 'top-right',
      autoClose: 3000, 
    });
  }
};

  return (
    <div className={styles.container} id='newsletter'>
    <div className={styles.left}>
      sign up & stay informed.
    </div>
    <div className={styles.right}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter your Email Address'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Subscribe
        </button>
      </form>
    </div>
    <ToastContainer />
  </div>
  )
}

export default NewsLetter