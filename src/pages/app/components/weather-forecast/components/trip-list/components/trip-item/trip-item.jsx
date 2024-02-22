import PropTypes from 'prop-types';

import { getValidClassNames } from '~/libs/helpers/helpers.js';
import { tripType } from '~/libs/prop-types/prop-types.js';

import styles from './styles.module.css';

const TripItem = ({ trip, isSelected, onClick }) => {
  const formatDate = (date) => date.split('-').reverse().join('.');

  const handleTripClick = () => {
    onClick(trip);
  };

  return (
    <div className={styles.itemContainer} onClick={handleTripClick}>
      <img src={trip.image} alt={trip.city} />
      <div
        className={getValidClassNames(
          styles.textContainer,
          isSelected && styles.selectedTrip,
        )}
      >
        <p>{trip.city}</p>
        <p className={styles.date}>
          {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
        </p>
      </div>
    </div>
  );
};

TripItem.propTypes = {
  trip: tripType.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { TripItem };
