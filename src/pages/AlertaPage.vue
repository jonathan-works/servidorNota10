<template>
  <q-page class="q-pa-md q-gutter-y-lg">
    <AbandonoDeCargo v-if="route.params.alertaId === AlertaIdEnum.ABANDONO_DE_CARGO"></AbandonoDeCargo>
  </q-page>
</template>

<script setup>
import AbandonoDeCargo from 'src/components/alerta/AbandonoDeCargo.vue';
import { AlertaIdEnum } from 'src/model/alertaId.enum';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>