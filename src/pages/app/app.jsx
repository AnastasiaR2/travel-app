import { SideInfo, WeatherForecast } from './components/components.js';
import styles from './styles.module.css';

const App = () => (
  <div className={styles.wrapper}>
    <WeatherForecast />
    <SideInfo />
  </div>
);

export { App };
