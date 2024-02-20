import { useState } from 'react';
import { useSelector } from 'react-redux';

import AddIcon from '~/assets/images/icons/add-icon.svg?react';
import SearchIcon from '~/assets/images/icons/search-icon.svg?react';
import { selectTrips } from '~/store/trips/selectors.js';

import styles from './styles.module.css';
import { TripItem } from './trip-item/trip-item.jsx';

const TripList = () => {
  const trips = useSelector(selectTrips);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTrips = trips.filter((trip) =>
    trip.city.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  const sortedTrips = [...filteredTrips].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate),
  );

  return (
    <>
      <div className={styles.searchBar}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search your trip"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.tripsContainer}>
        <div className={styles.tripsList}>
          {sortedTrips.map((trip) => (
            <TripItem key={trip.id} trip={trip} />
          ))}
        </div>
        <button className={styles.addTripBtn}>
          <AddIcon />
          <p>Add trip</p>
        </button>
      </div>
    </>
  );
};

export { TripList };
