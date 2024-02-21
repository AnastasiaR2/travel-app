import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { DataStatus } from '~/libs/enums/enums.js';

import { fetchForecastForPeriod, fetchForecastForToday } from './actions.js';

const initialState = {
  forecastForPeriod: null,
  forecastForDay: null,
  status: DataStatus.IDLE,
};

const { reducer, actions } = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchForecastForPeriod.fulfilled, (state, action) => {
      state.forecastForPeriod = action.payload.days;
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addCase(fetchForecastForToday.fulfilled, (state, action) => {
      state.forecastForPeriod = action.payload;
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addMatcher(
      isAnyOf(fetchForecastForPeriod.pending, fetchForecastForToday.pending),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
      isAnyOf(fetchForecastForPeriod.rejected, fetchForecastForToday.rejected),
      (state) => {
        state.dataStatus = DataStatus.REJECTED;
      },
    );
  },
});

export { actions, reducer };
