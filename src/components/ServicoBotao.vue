<template>
    <div>
        <div class="card flex justify-center items-center rounded-borders bg-secondary text-black">
            <q-icon :name="servico?.icon" size="3rem"/>
        </div>
        <div class="text-center text-weight-medium">
            <p>{{servico?.nome}}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps(['servico'])
</script>

<style scoped lang="scss">
    .card{
        min-height: 100px;
        min-width: 100px;
    }
</style>