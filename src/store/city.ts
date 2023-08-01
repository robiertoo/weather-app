import { defineStore } from 'pinia'
import { Ref, ref } from 'vue';
import axios from 'axios';

type City = {
  name: string;
  country: string;
  temperature: Float32Array;
  temperatureMinimum: Float32Array;
  temperatureMaximum: Float32Array;
  humidity: number;
  windSpeed: Float32Array;
};

export const UseCityStore = defineStore('city', () => {
  const city: Ref<City | null> = ref(null);
  
  function findCity(name: string) {
    axios.get(process.env.VUE_APP_OPEN_WEATHER_URL + '?appid=' + process.env.VUE_APP_OPEN_WEATHER_KEY + '&q=' + name)
      .then(({ data }) => {
        console.log(data);
      });
  }

  return { city, findCity };
})
