import { useSelector } from 'react-redux';

import { ForecastItem } from '~/components/components.js';
import { selectForecastForToday } from '~/store/forecast/forecast.js';

import { CountdownTimer } from './countdown-timer/countdown-timer.jsx';
import styles from './styles.module.css';

const SideInfo = () => {
  const forecastForToday = useSelector(selectForecastForToday);

  return (
    <>
      {forecastForToday && (
        <aside className={styles.sideInfoContainer}>
          <ForecastItem
            dayForecast={forecastForToday?.days[0]}
            address={forecastForToday.address}
          />
          <CountdownTimer startDate={forecastForToday.startDate} />
        </aside>
      )}
    </>
  );
};

export { SideInfo };
