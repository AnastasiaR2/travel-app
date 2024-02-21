import { useDispatch, useSelector } from 'react-redux';

import {
  actions as forecastActions,
  selectForecastForPeriod,
} from '~/store/forecast/forecast.js';

import styles from './styles.module.css';
import { TripList } from './trip-list/trip-list.jsx';

const mockedTrip3 = {
  id: '4c7564ada692-55a683de7fbe',
  city: 'Tokyo',
  image:
    'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3',
  startDate: '2024-02-21',
  endDate: '2024-02-25',
  createdAt: '2024-02-19T17:14:38.147Z',
};

const WeatherForecast = () => {
  const forecastForPeriod = useSelector(selectForecastForPeriod);
  const dispatch = useDispatch();

  const handleTripClick = () =>
    dispatch(forecastActions.fetchForecastForToday(mockedTrip3));

  return (
    <main className={styles.container}>
      <h1 className={styles.title} onClick={handleTripClick}>
        <span>Weather</span> Forecast
      </h1>
      <TripList />
    </main>
  );
};

export { WeatherForecast };
