import { createSlice } from '@reduxjs/toolkit';

const mockedTrip = {
  id: '4c7564ad-fafc-4641-a692-55a683de7fbe',
  city: 'London',
  image:
    'https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
  startDate: '2024-02-20',
  endDate: '2024-02-25',
  createdAt: '2024-02-19T17:14:38.147Z',
};

const mockedTrip2 = {
  id: '4c7564ad-fafc',
  city: 'Berlin',
  image:
    'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  startDate: '2024-03-20',
  endDate: '2024-03-25',
  createdAt: '2024-02-19T17:14:38.147Z',
};

const mockedTrip3 = {
  id: '4c7564ada692-55a683de7fbe',
  city: 'Tokyo',
  image:
    'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3',
  startDate: '2024-02-21',
  endDate: '2024-02-25',
  createdAt: '2024-02-19T17:14:38.147Z',
};

const initialState = {
  trips: [mockedTrip, mockedTrip2, mockedTrip3],
};

const { reducer, actions } = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addTrip(state, action) {
      state.trips.push(action.payload);
    },
  },
});

export { actions, reducer };
