import {
  HeaderAvatar,
  SideInfo,
  WeatherForecast,
} from './components/components.js';
import styles from './styles.module.css';

const App = () => (
  <div className={styles.wrapper}>
    <HeaderAvatar />
    <WeatherForecast />
    <SideInfo />
  </div>
);

export { App };
