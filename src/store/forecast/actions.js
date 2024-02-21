import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const API_KEY = 'KTE2GZGTUXG8CN6NN4J99TB4J';

const fetchForecastForPeriod = createAsyncThunk(
  'forecast/fetchForecastForPeriod',
  async (payload) => {
    const { city, startDate, endDate } = payload;
    const response = await axios.get(
      `${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json&iconSet=icons2`,
    );
    return response.data;
  },
);

const fetchForecastForToday = createAsyncThunk(
  'forecast/fetchForecastForToday',
  async (payload) => {
    const { city } = payload;
    const response = await axios.get(
      `${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json&iconSet=icons2`,
    );
    return response.data;
  },
);

export { fetchForecastForPeriod, fetchForecastForToday };
