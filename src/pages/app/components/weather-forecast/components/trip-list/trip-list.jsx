import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddIcon from '~/assets/images/icons/add-icon.svg?react';
import ArrowBackIcon from '~/assets/images/icons/arrow-back-icon.svg?react';
import ArrowForwardIcon from '~/assets/images/icons/arrow-forward-icon.svg?react';
import SearchIcon from '~/assets/images/icons/search-icon.svg?react';
import { ScrollDirection } from '~/libs/enums/enums.js';
import { getValidClassNames } from '~/libs/helpers/helpers.js';
import { actions as forecastActions } from '~/store/forecast/forecast.js';
import { selectTrips } from '~/store/trips/trips.js';
import { actions as tripsActions } from '~/store/trips/trips.js';

import { AddTripModal, TripItem } from './components/components.js';
import styles from './styles.module.css';

// trip-item width + gap
const SCROLL_VALUE = 305;

const MIN_ITEMS_FOR_SCROLLING = 4;

const TripList = () => {
  const trips = useSelector(selectTrips);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState(null);

  const tripsListRef = useRef(null);

  const handleToggleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTripAdd = (trip) => dispatch(tripsActions.addTrip(trip));

  const handleTripSave = (trip) => {
    handleTripAdd(trip);

    handleToggleModalOpen();
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTripClick = (trip) => {
    setSelectedTripId(trip.id);
    dispatch(forecastActions.fetchForecastForPeriod(trip));
    dispatch(forecastActions.fetchForecastForToday(trip));
  };

  const handleScroll = (direction) => {
    if (tripsListRef.current) {
      const scrollValue =
        direction === ScrollDirection.LEFT ? -SCROLL_VALUE : SCROLL_VALUE;
      tripsListRef.current.scroll({
        left: tripsListRef.current.scrollLeft + scrollValue,
        behavior: 'smooth',
      });
    }
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
        <div className={styles.tripsList} ref={tripsListRef}>
          {sortedTrips.map((trip) => (
            <TripItem
              key={trip.id}
              trip={trip}
              isSelected={trip.id === selectedTripId}
              onClick={handleTripClick}
            />
          ))}
        </div>
        {sortedTrips.length >= MIN_ITEMS_FOR_SCROLLING && (
          <>
            <ArrowBackIcon
              className={getValidClassNames(
                styles.arrowIcon,
                styles.arrowIconBack,
              )}
              onClick={() => handleScroll(ScrollDirection.LEFT)}
            />
            <ArrowForwardIcon
              className={getValidClassNames(
                styles.arrowIcon,
                styles.arrowIconForward,
              )}
              onClick={() => handleScroll(ScrollDirection.RIGHT)}
            />
          </>
        )}
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
