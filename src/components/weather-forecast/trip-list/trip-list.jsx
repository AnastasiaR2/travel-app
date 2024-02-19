import { useSelector } from 'react-redux';

import { selectTrips } from '~/store/trips/selectors.js';

import styles from './styles.module.css';

const TripList = () => {
  const trips = useSelector(selectTrips);
  console.log(trips);
  return <></>;
};

export { TripList };
