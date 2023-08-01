<template>
  <div class="flex justify-center">
    <div class="w-full lg:w-1/2">
      <the-title />
      <city-details />
      <search-box />
      <capitals-tables />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheTitle from '@/components/TheTitle';
import SearchBox from '@/components/SearchBox'
import CapitalsTables from './components/CapitalsTables';
import CityDetails from './components/CityDetails';
import { UseCityStore } from './store/city';

const store = UseCityStore();

const { findCity } = store;

findCity('São Paulo');
</script>
