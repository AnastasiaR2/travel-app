import { tripType } from '~/libs/prop-types/prop-types.js';

import styles from './styles.module.css';

const TripItem = ({ trip }) => {
  console.log(trip);
  return (
    <div className={styles.itemContainer}>
      <img src={trip.image} alt={trip.city} />
      <div className={styles.textContainer}>
        <p>{trip.city}</p>
        <p>
          {trip.startDate} - {trip.endDate}
        </p>
      </div>
    </div>
  );
};

TripItem.propTypes = {
  trip: tripType.isRequired,
};

export { TripItem };
