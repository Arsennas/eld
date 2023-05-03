import React from 'react';
import s from './head.module.css'
import Image1 from '../images/unsplash_a7Woj8W6J0s.png'

const Head = () => {
  return (
    <div>
      <div className={s.head}>
        <b className={s.b}>Plants made easy</b>
        <p className={s.p}>
          Pianta helps you discover
          <br />
          the best plants for your space,
          <br />
          delivers them to your door and
          <br />
          helps you look after them.
        </p>
        <button className={s.btn}>show now</button>
      </div>
    </div>
  );
};

export default Head;