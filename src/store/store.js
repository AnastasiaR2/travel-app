import { configureStore } from '@reduxjs/toolkit';

import { reducer as forecastReducer } from './forecast/forecast.js';
import { reducer as tripsReducer } from './trips/trips.js';

const store = configureStore({
  reducer: {
    trips: tripsReducer,
    forecast: forecastReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
