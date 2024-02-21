import { useSelector } from 'react-redux';

import { selectForecastForPeriod } from '~/store/forecast/forecast.js';

import { Forecast } from './forecast/forecast.jsx';
import styles from './styles.module.css';
import { TripList } from './trip-list/trip-list.jsx';

const WeatherForecast = () => {
  const forecastForPeriod = useSelector(selectForecastForPeriod);

  console.log(forecastForPeriod);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        <span>Weather</span> Forecast
      </h1>
      <TripList />
      <Forecast />
    </main>
  );
};

export { WeatherForecast };
