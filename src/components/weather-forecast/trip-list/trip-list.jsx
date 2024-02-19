import { useSelector } from 'react-redux';

import SearchIcon from '~/assets/images/icons/search-icon.svg?react';
import { selectTrips } from '~/store/trips/selectors.js';

import styles from './styles.module.css';
import { TripItem } from './trip-item/trip-item.jsx';

const TripList = () => {
  const trips = useSelector(selectTrips);
  return (
    <>
      <div className={styles.searchBar}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search your trip"
          // className={styles.searchBar}
          // value={query}
          // onChange={handleInputChange}
        />
      </div>
      <div className={styles.tripsContainer}>
        {trips.map((item) => (
          <TripItem key={item.id} trip={item} />
        ))}
      </div>
    </>
  );
};

export { TripList };
