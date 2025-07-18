<template>
    <div class="bg-primary q-pr-sm rounded-borders">
        <q-card class="border-left-rounded">
            <q-card-section>
                <div class="card column justify-between">
                    <div class="flex items-center text-black">
                        <q-icon :name="servico?.icon" size="1.4rem"/>
                    </div>
                    <div class="text-weight-medium">
                        <span>{{servico?.nome}}</span>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>
<script setup lang="ts">
import { ionDiamondSharp } from '@quasar/extras/ionicons-v7';

const props = defineProps(['servico'])

</script>

<style scoped lang="scss">
    .card{
        min-height: 80px;
        min-width: 100px;
    }
    .border-left-rounded{
        border-radius: 4px 0px 0px 4px;
    }
</style>