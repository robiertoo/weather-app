<template>
    <div class="text-white text-3xl font-semibold">
        Capitais
    </div>

    <div class="flex space-x-5">
        <capitals-table />
        <capitals-table />
    </div>
</template>

<script setup lang="ts">
import CapitalsTable from '@/components/CapitalsTable';
</script>