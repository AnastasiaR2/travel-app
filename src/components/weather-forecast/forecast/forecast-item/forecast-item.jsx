import PropTypes from 'prop-types';

import { ICON_MAP } from '~/libs/constants/constants.js';
import { getDayOfWeek } from '~/libs/helpers/helpers.js';

import styles from './styles.module.css';

const ForecastItem = ({ dayForecast, address }) => {
  const { icon, datetime, tempmax, tempmin, temp } = dayForecast;

  return (
    <div className={styles.dayContainer}>
      <p className={address && styles.dayOfWeek}>{getDayOfWeek(datetime)}</p>
      {address ? (
        <>
          <div className={styles.iconWrapper}>
            <img src={ICON_MAP[icon]} alt={icon} />
            <p className={styles.temperature}>{Math.round(temp)}</p>
            <p>°C</p>
          </div>
          <p>{address}</p>
        </>
      ) : (
        <>
          <img src={ICON_MAP[icon]} alt={icon} />
          <p>
            {Math.round(tempmax)}°/{Math.round(tempmin)}°
          </p>
        </>
      )}
    </div>
  );
};

ForecastItem.propTypes = {
  dayForecast: PropTypes.object.isRequired,
  address: PropTypes.string,
};

export { ForecastItem };
