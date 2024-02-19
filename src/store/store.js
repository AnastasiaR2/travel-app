import { configureStore } from '@reduxjs/toolkit';

import { reducer as tripsReducer } from './trips/trips.slice.js';

const store = configureStore({
  reducer: {
    trips: tripsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
