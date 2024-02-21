import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Forecast = ({ forecast }) => {
  const headerText = `${forecast.length} ${forecast.length === 1 ? 'day' : 'days'}`;

  console.log(forecast);

  return (
    <div className={styles.forecastContainer}>
      <h3>{headerText}</h3>
    </div>
  );
};

Forecast.propTypes = {
  forecast: PropTypes.array.isRequired,
};

export { Forecast };
