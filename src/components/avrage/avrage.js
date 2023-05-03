import React from 'react';
import s from './avrage.module.css'
import Image2 from '../images/unsplash_sEApBUS4fIk.png'

const Avrage = () => {
  return (
    <div className={s.main}>
      <div className={s.first}>
        <img src={Image2} alt="" />
      </div>
      <div className={s.second}>
        <b className={s.a}>ABOUT US </b>
        <p className={s.b}>
          When you buy houseplants online from Pianta, they are not
          <br />
          only conveniently delivered to your door but are shipped
          <br />
          directly from our greenhouse. This means that your Pianta
          <br />
          potted plant arrives healthy and thriving.
          <br />
          Most indoor plants you buy from a box store or other retailer
          <br />
          spend 3–4 weeks getting from the greenhouse to your home.
          <br />
          Buying houseplants online is not only easier, but it’s 
          <br />
          also better for the health of the plant.
        </p>
        <button className={s.c}>learn more</button>
      </div>
    </div>
  );
};

export default Avrage;