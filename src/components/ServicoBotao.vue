<template>
    <div>
        <div class="card flex justify-center items-center rounded-borders bg-secondary text-black">
            <q-icon :name="ionDiamondSharp" size="3rem"/>
        </div>
        <div class="text-center text-weight-medium">
            <p>Integraidade</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ionDiamondSharp } from '@quasar/extras/ionicons-v7';
</script>

<style scoped lang="scss">
    .card{
        min-height: 100px;
        min-width: 100px;
    }
</style>