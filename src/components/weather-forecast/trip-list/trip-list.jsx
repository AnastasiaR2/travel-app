import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddIcon from '~/assets/images/icons/add-icon.svg?react';
import SearchIcon from '~/assets/images/icons/search-icon.svg?react';
import { selectTrips } from '~/store/trips/trips.js';
import { actions as tripsActions } from '~/store/trips/trips.js';

import { AddTripModal } from './add-trip-modal/add-trip-modal.jsx';
import styles from './styles.module.css';
import { TripItem } from './trip-item/trip-item.jsx';

const TripList = () => {
  const trips = useSelector(selectTrips);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTripAdd = (tripPayload) =>
    dispatch(tripsActions.addTrip(tripPayload));

  const handleTripSave = (trip) => {
    handleTripAdd(trip);

    handleToggleModalOpen();
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
        <button className={styles.addTripBtn} onClick={handleToggleModalOpen}>
          <AddIcon />
          <p>Add trip</p>
        </button>
        {isModalOpen && (
          <AddTripModal
            isOpen={isModalOpen}
            onSave={handleTripSave}
            onClose={handleToggleModalOpen}
          />
        )}
      </div>
    </>
  );
};

export { TripList };
