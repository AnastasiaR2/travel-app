import { useSelector } from 'react-redux';

import { selectForecastForToday } from '~/store/forecast/forecast.js';

import styles from './styles.module.css';

const CountdownTimer = () => {
  const forecastForToday = useSelector(selectForecastForToday);

  return (
    <>
      {forecastForToday && (
        <aside className={styles.countdownContainer}></aside>
      )}
    </>
  );
};

export { CountdownTimer };
