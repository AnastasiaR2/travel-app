import PropTypes from 'prop-types';

import { getPluralizedString } from '~/libs/helpers/helpers.js';

import { ForecastItem } from './forecast-item/forecast-item.jsx';
import styles from './styles.module.css';

const Forecast = ({ forecast }) => {
  const headerText = `${forecast.length} ${getPluralizedString(forecast.length, 'day')}`;

  return (
    <div className={styles.forecastContainer}>
      <h3>{headerText}</h3>
      <div className={styles.forecastList}>
        {forecast.map((day) => (
          <ForecastItem key={day.datetime} dayForecast={day} />
        ))}
      </div>
    </div>
  );
};

Forecast.propTypes = {
  forecast: PropTypes.array.isRequired,
};

export { Forecast };
