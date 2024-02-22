import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { calculateRemainingTime } from '~/libs/helpers/helpers.js';

import styles from './styles.module.css';

const CountdownTimer = ({ startDate }) => {
  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime(startDate),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime(startDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <div className={styles.timerContainer}>
      <p>
        <span>{remainingTime.days}</span>days
      </p>
      <p>
        <span>{remainingTime.hours}</span>hours
      </p>
      <p>
        <span>{remainingTime.minutes}</span>minutes
      </p>
      <p>
        <span>{remainingTime.seconds}</span>seconds
      </p>
    </div>
  );
};

CountdownTimer.propTypes = {
  startDate: PropTypes.string.isRequired,
};

export { CountdownTimer };
