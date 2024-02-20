import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddIcon from '~/assets/images/icons/add-icon.svg?react';
import SearchIcon from '~/assets/images/icons/search-icon.svg?react';
import { selectTrips } from '~/store/trips/selectors.js';
import { actions as tripsActions } from '~/store/trips/trips.slice.js';

import { AddTripModal } from './add-trip-modal/add-trip-modal.jsx';
import styles from './styles.module.css';
import { TripItem } from './trip-item/trip-item.jsx';

const TripList = () => {
  const trips = useSelector(selectTrips);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTrip, setCurrentTrip] = useState(null);

  const hasCurrentTrip = Boolean(currentTrip);

  const handleModalOpen = () =>
    setCurrentTrip({
      city: null,
      startDate: '',
      endDate: '',
    });

  const handleModalClose = () => setCurrentTrip(null);

  const handleTripAdd = useCallback(
    (tripPayload) => dispatch(tripsActions.addTrip(tripPayload)),
    [dispatch],
  );

  const handleTripSave = (trip) => {
    handleTripAdd(trip);

    setCurrentTrip(null);
  };

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
        <button className={styles.addTripBtn} onClick={handleModalOpen}>
          <AddIcon />
          <p>Add trip</p>
        </button>
        {hasCurrentTrip && (
          <AddTripModal
            trip={currentTrip}
            onSave={handleTripSave}
            onClose={handleModalClose}
          />
        )}
      </div>
    </>
  );
};

export { TripList };
