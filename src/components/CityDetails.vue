<template>
    <div class="w-full h-1/2 bg-white mt-10" v-if="city">
        <div class="w-full h-4/6">
            <div class="w-full">
                {{ city.name }}, ES - {{ city.country }}
            </div>
            
            <div>
                {{ city.temperature }}º C {{ city.weather }}
            </div>
    
            <div class="flex">
                <div>
                    {{ city.temperatureMinimum }}-{{ city.temperatureMaximum }}
                </div>
                
                <div>
                    sensação {{ city.temperatureFeelsLike }}º C
                </div>
            </div>
            
            <div class="flex">
                <div>
                    {{ city.windSpeed }}
                </div>
                
                <div>
                    {{ city.humidity }}
                </div>
            </div>
        </div>

        <div class="w-full flex justify-between px-2 border-t-2 border-orange-200">
            <div class="text-center font-semibold">
                <div class="text-slate-800">Terça</div>
                <div class="text-orange-400">18º a 20º C</div>
            </div>
            <div class="text-center font-semibold">
                <div class="text-slate-800">Terça</div>
                <div class="text-orange-400">18º a 20º C</div>
            </div>
            <div class="text-center font-semibold">
                <div class="text-slate-800">Terça</div>
                <div class="text-orange-400">18º a 20º C</div>
            </div>
            <div class="text-center font-semibold">
                <div class="text-slate-800">Terça</div>
                <div class="text-orange-400">18º a 20º C</div>
            </div>
            <div class="text-center font-semibold">
                <div class="text-slate-800">Terça</div>
                <div class="text-orange-400">18º a 20º C</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UseCityStore } from '@/store/city';
import { storeToRefs } from 'pinia';

const store = UseCityStore();

const { city } = storeToRefs(store);
</script>