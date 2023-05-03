import React from 'react';
import s from './conclision.module.css'

const Conclision = () => {
  return (
    <>
      <div className={s.end}>
        <p className={s.ac}>
          <strong>
            Earth Day Sale!
          </strong>
          <br />
          This weekend only, save 20% on plants with code EARTH20.
          <br />
          Get an additional $25 credit when you spend $150 or more.
        </p>
      </div>
      <hr />
    </>
  );
};

export default Conclision;