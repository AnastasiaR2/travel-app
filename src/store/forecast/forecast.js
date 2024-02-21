import { fetchForecastForPeriod, fetchForecastForToday } from './actions.js';
import { actions } from './forecast.slice.js';

const allActions = {
  ...actions,
  fetchForecastForPeriod,
  fetchForecastForToday,
};

export { allActions as actions };
export { reducer } from './forecast.slice.js';
export { selectForecastForPeriod } from './selectors.js';
