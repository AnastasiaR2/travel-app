import { useSelector } from 'react-redux';

import { ForecastItem } from '~/components/components.js';
import { selectForecastForToday } from '~/store/forecast/forecast.js';

import styles from './styles.module.css';

const CountdownTimer = () => {
  const forecastForToday = useSelector(selectForecastForToday);

  return (
    <>
      {forecastForToday && (
        <aside className={styles.countdownContainer}>
          <ForecastItem
            dayForecast={forecastForToday?.days[0]}
            address={forecastForToday.address}
          />
        </aside>
      )}
    </>
  );
};

export { CountdownTimer };
