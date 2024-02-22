import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import { reducer as forecastReducer } from './forecast/forecast.js';
import { reducer as tripsReducer } from './trips/trips.js';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['trips'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ trips: tripsReducer, forecast: forecastReducer }),
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { persistor, store };
