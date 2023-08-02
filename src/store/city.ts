import { defineStore } from 'pinia'
import { Ref, ref } from 'vue';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useTemperatureConverter } from '@/composables/temperatureConverter'

type City = {
  name: string;
  country: string;
  temperature: number;
  temperatureMinimum: number;
  temperatureMaximum: number;
  temperatureFeelsLike: number;
  humidity: number;
  windSpeed: number;
  weather: string;
};

export const UseCityStore = defineStore('city', () => {
  const city: Ref<City | null> = ref(null);
  const isLoading: Ref<boolean> = ref(false);
  
  function setCity(response: AxiosResponse): void {
    const { data } = response;

    city.value = {
      name: data.name,
      country: data.sys.country,
      temperature: useTemperatureConverter(data.main.temp),
      temperatureMinimum: useTemperatureConverter(data.main.temp_min),
      temperatureMaximum: useTemperatureConverter(data.main.temp_max),
      temperatureFeelsLike: useTemperatureConverter(data.main.feels_like),
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


    isLoading.value = true;

    axios.get(url)
      .then((response: AxiosResponse) => setCity(response))
      .catch((error: AxiosError) => console.log(error))
      .finally(() => isLoading.value = false);
  }

  return { city, isLoading, findCity };
})
