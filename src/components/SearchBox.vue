<template>
    <div class="h-1/3 w-full flex justify-center items-center">
        <input
            placeholder="Insira aqui o nome da cidade"
            class="pl-3 w-full h-10"
            v-model="city"
            @keyup.enter="findCity(city)"
        >
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { UseCityStore } from '../store/city';

const city: Ref<string> = ref('');

const store = UseCityStore();

const { findCity } = store;
</script>