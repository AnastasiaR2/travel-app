import styles from './styles.module.css';
import { TripList } from './trip-list/trip-list.jsx';

const WeatherForecast = () => {
  return (
    <main className={styles.container}>
      <h1>
        <span>Weather</span> Forecast
      </h1>
      <TripList />
    </main>
  );
};

export { WeatherForecast };
