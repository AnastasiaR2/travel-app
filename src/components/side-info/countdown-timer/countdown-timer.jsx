import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { calculateRemainingTime } from '~/libs/helpers/helpers.js';
import { getPluralizedString } from '~/libs/helpers/helpers.js';

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
        <span>{remainingTime.days}</span>
        {getPluralizedString(remainingTime.days, 'day')}
      </p>
      <p>
        <span>{remainingTime.hours}</span>
        {getPluralizedString(remainingTime.hours, 'hour')}
      </p>
      <p>
        <span>{remainingTime.minutes}</span>
        {getPluralizedString(remainingTime.minutes, 'minute')}
      </p>
      <p>
        <span>{remainingTime.seconds}</span>
        {getPluralizedString(remainingTime.seconds, 'second')}
      </p>
    </div>
  );
};

CountdownTimer.propTypes = {
  startDate: PropTypes.string.isRequired,
};

export { CountdownTimer };
