import { useSelector } from 'react-redux';

import { selectTrips } from '~/store/trips/selectors.js';

import styles from './styles.module.css';
import { TripItem } from './trip-item/trip-item.jsx';

const TripList = () => {
  const trips = useSelector(selectTrips);
  return (
    <div className={styles.wrapper}>
      {trips.map((item) => (
        <TripItem key={item.id} trip={item} />
      ))}
    </div>
  );
};

export { TripList };
