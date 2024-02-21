import PropTypes from 'prop-types';

import { ICON_MAP } from '~/libs/constants/constants.js';
import { getDayOfWeek } from '~/libs/helpers/helpers.js';

import styles from './styles.module.css';

const ForecastItem = ({ dayForecast }) => {
  const { icon, datetime, tempmax, tempmin } = dayForecast;

  return (
    <div className={styles.dayContainer}>
      <p>{getDayOfWeek(datetime)}</p>
      <img src={ICON_MAP[icon]} alt={icon} />
      <p>
        {Math.round(tempmax)}°/{Math.round(tempmin)}°
      </p>
    </div>
  );
};

ForecastItem.propTypes = {
  dayForecast: PropTypes.object.isRequired,
};

export { ForecastItem };
