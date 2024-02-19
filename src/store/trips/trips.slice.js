import { createSlice } from '@reduxjs/toolkit';

const mockedTrip = {
  id: '4c7564ad-fafc-4641-a692-55a683de7fbe',
  city: 'London',
  startDate: '2024-02-20',
  endDate: '2024-02-25',
};

const initialState = {
  trips: [mockedTrip],
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
