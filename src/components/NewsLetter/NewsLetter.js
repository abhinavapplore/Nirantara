import React, { useState } from 'react'
import styles from './NewsLetter.module.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  // const backendUrl = 'https://nirantari-backend.vercel.app/subscriber'
  const backendUrl = 'https://nirantara-api.applore.in/subscriber'  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); 
      const response = await axios.post(backendUrl, { email });
      console.log('Subscription successful:', response.data);
      toast.success('Email sent successful', {
        position: 'top-right',
        autoClose: 3000,
      });
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error.message);
      toast.error('Subscription failed. Please check email.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }finally {
      setLoading(false); // Set loading to false when the request completes
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
            {/* Subscribe */}
            {loading ? 'Loading...' : 'Subscribe'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default NewsLetter