import PropTypes from 'prop-types';

import { ForecastItem } from '~/components/components.js';
import { getPluralizedString } from '~/libs/helpers/helpers.js';

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
