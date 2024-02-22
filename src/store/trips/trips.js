import { actions } from './trips.slice.js';

const allActions = {
  ...actions,
};

export { allActions as actions };
export { selectTrips } from './selectors.js';
export { reducer } from './trips.slice.js';
