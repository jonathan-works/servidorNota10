<template>
    <div class="bg-primary q-pr-sm rounded-borders">
        <q-card class="border-left-rounded">
            <q-card-section >
                <router-link :to="{name: 'alerta', params: {alertaId: alerta.id}}" style="text-decoration: none; color: inherit;">
                    <div class="card column justify-between">
                        <div class="flex items-center text-black">
                            <q-icon :name="alerta?.icon" size="1.4rem"/>
                        </div>
                        <div class="text-weight-medium">
                            <span>{{alerta?.nome}}</span>
                        </div>
                    </div>
                </router-link>
            </q-card-section>
        </q-card>
    </div>
</template>
<script setup lang="ts">
import { ionDiamondSharp } from '@quasar/extras/ionicons-v7';

const props = defineProps(['alerta'])

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