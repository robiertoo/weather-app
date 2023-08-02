import { defineStore } from 'pinia'
import { Ref, ref } from 'vue';
import axios, { AxiosResponse } from 'axios';

type City = {
  name: string;
  country: string;
  temperature: Float32Array;
  temperatureMinimum: Float32Array;
  temperatureMaximum: Float32Array;
  temperatureFeelsLike: Float32Array;
  humidity: number;
  windSpeed: Float32Array;
  weather: string;
};

export const UseCityStore = defineStore('city', () => {
  const city: Ref<City | null> = ref(null);
  
  function setCity(response: AxiosResponse): void {
    const { data } = response;

    city.value = {
      name: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      temperatureMinimum: data.main.temp_min,
      temperatureMaximum: data.main.temp_min,
      temperatureFeelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      weather: data.weather.main,
    }
  }

  function findCity(name: string): void {
    const url = process.env.VUE_APP_OPEN_WEATHER_URL 
      + '?appid=' 
      + process.env.VUE_APP_OPEN_WEATHER_KEY 
      + '&q=' 
      + name;

    axios.get(url).then((response: AxiosResponse) => setCity(response));
  }

  return { city, findCity };
})
