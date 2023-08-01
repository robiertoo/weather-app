<template>
    <div class="h-1/3 w-full flex justify-center items-center">
        <input
            placeholder="Insira aqui o nome da cidade"
            class="pl-3 w-full h-10"
            v-model="city"
        >
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

const city: Ref<string> = ref('');
</script>