import PropTypes from 'prop-types';

const tripType = PropTypes.exact({
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
});

export { tripType };
