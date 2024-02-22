const selectForecastForPeriod = (state) => state.forecast.forecastForPeriod;

const selectForecastForToday = (state) => state.forecast.forecastForToday;

export { selectForecastForPeriod, selectForecastForToday };
