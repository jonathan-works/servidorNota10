<template>
  <q-page class="q-gutter-y-md">
    <div class="q-pa-md">
      <h1 class="text-h5 q-my-none">Olá, Servidor nota <span class="text-weight-medium">10</span>
      </h1>
    </div>
    <div>
      <CarouselImages />
    </div>
    <div>
      <ServicosMaisAcessados/>
    </div>
    <div>
      <RecomdadosParaVoce/>
    </div>
    <div>
      <AlertasCategorias/>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CarouselImages from 'components/Carouselimages.vue';
import ServicosMaisAcessados from 'components/ServicosMaisAcessados.vue';
import RecomdadosParaVoce from 'components/RecomdadosParaVoce.vue';
import AlertasCategorias from 'components/AlertasCategorias.vue';
</script>
